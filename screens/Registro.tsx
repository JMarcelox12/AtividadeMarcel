import { FlatList, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View, Alert, Image, Button } from "react-native";
import styles from "../styles";
import { useEffect, useState } from "react";
import { auth, firestore, storage } from '../firebase';
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { uploadBytes } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "react-native-modal-datetime-picker";


const Registro = () => {
    const [PickerVisible, setPickerVisible] = useState (false);
    const [dataFinal, setDataFinal] = useState ('');
    const [tipoUsuario, setTipoUsuario] = useState("usuario");
    const [formUsuario, setFormUsuario] = useState({});
    const [imagePath, setImagePath] = useState('');

    const showPicker = () => {
        setPickerVisible(true);
    }

    const hidePicker = () => {
        setPickerVisible(false);
    }

    const handleConfirm = (date) => {

        const dia = date.getDate();
        const mes = date.getMonth();
        const ano = date.getFullYear();
        setDataFinal(dia + "/" + mes + "/" + ano);
        handleInputChange("datanasc", dataFinal);

        hidePicker();
    }

    const navigation = useNavigation();

    useEffect(() => {
        const logout = auth.onAuthStateChanged(user => {
            if (user) navigation.replace("HomeUsuario");
        })
    })

    const selecionaFoto = () => {
        Alert.alert(
            "Selecionar Foto",
            "Escolha uma alternativa:",
            [
                {
                    text: "Câmera",
                    onPress: () => abrirCamera()
                },
                {
                    text: "Abrir Galeria",
                    onPress: () => abrirGaleria()
                }
            ]
        );
    }

    const abrirCamera = async () => {
        const permissao = await ImagePicker.requestCameraPermissionsAsync();
        if (permissao.granted === false) {
            alert("Você recusou o acesso à câmera");
            return;
        }
        const foto = await ImagePicker.launchCameraAsync();
        enviaFoto(foto);
    }

    const abrirGaleria = async () => {
        const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissao.granted === false) {
            alert("Você recusou o acesso à galeria");
            return;
        }
        const foto = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1
        });
        enviaFoto(foto);
    }

    const enviaFoto = async (foto) => {
        setImagePath(foto.assets[0].uri);
        const filename = foto.assets[0].fileName;
        const ref = storage.ref(`imagens/${filename}`);

        const img = await fetch(foto.assets[0].uri);
        const bytes = await img.blob();
        const fbResult = await uploadBytes(ref, bytes);

        const urlDownload = await storage.ref(fbResult.metadata.fullPath).getDownloadURL();

        setFormUsuario({...formUsuario, imagem: urlDownload});
    }

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(formUsuario.email, formUsuario.senha)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("Registrado como:", user.email);

                // Salva na coleção correta
                if (tipoUsuario === "usuario") {
                    firestore.collection("Usuarios").doc(user.uid).set({
                        id: user.uid,
                        nome: formUsuario.nome,
                        email: formUsuario.email,
                        senha: formUsuario.senha,
                        datanasc: formUsuario.datanasc,
                        cpf: formUsuario.cpf,
                        endereco: formUsuario.endereco,
                        imagem: "https://firebasestorage.googleapis.com/v0/b/jjay-9925d.appspot.com/o/JaPede%20(1).png?alt=media&token=a05af48d-42a6-4c3b-a4d7-61209688d223",
                        tipo: "usuario",
                    });
                } else if (tipoUsuario === "estabelecimento") {
                    firestore.collection("Estabelecimentos").doc(user.uid).set({
                        id: user.uid,
                        nome: formUsuario.nome,
                        email: formUsuario.email,
                        senha: formUsuario.senha,
                        cnpj: formUsuario.cnpj,
                        endereco: formUsuario.endereco,
                        imagem: imagePath,
                        tipo: "estabelecimento",
                    });
                } else if (tipoUsuario === "motorista") {
                    firestore.collection("Motoristas").doc(user.uid).set({
                        id: user.uid,
                        nome: formUsuario.nome,
                        email: formUsuario.email,
                        senha: formUsuario.senha,
                        datanasc: formUsuario.datanasc,
                        cnh: formUsuario.cnh,
                        cpf: formUsuario.cpf,
                        imagem: imagePath,
                        tipo: "motorista",
                    });
                }
            })
            .catch((error) => alert(error.message));
    };

    const handleInputChange = (key, value) => {
        setFormUsuario({
            ...formUsuario,
            [key]: value,
        });
    };

    const renderFormFields = () => {
        switch (tipoUsuario) {
            case "usuario":
                return (
                    <>
                        <TextInput
                            placeholder="CPF"
                            onChangeText={(texto) => handleInputChange("cpf", texto)}
                            value={formUsuario.cpf || ""}
                            style={styles.boxAuth}
                        />
                       <TouchableOpacity style={styles.boxAuth} onPress={showPicker}>
                        <DateTimePicker 
                            isVisible={PickerVisible}
                            mode='date'
                            onCancel={hidePicker}
                            onConfirm={handleConfirm}
                        />
                        {dataFinal === '' ? (
                            <Text style={styles.boxAuthText}>Data de nascimento</Text>
                        ) : (
                            <Text style={styles.boxAuthText}>{dataFinal}</Text>
                        )}
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Endereço"
                            onChangeText={(texto) => handleInputChange("endereco", texto)}
                            value={formUsuario.endereco || ""}
                            style={styles.boxAuth}
                        />
                    </>
                );

            case "estabelecimento":
                return (
                    <>
                        
                        <TextInput
                            placeholder="Endereço"
                            onChangeText={(texto) => handleInputChange("endereco", texto)}
                            value={formUsuario.endereco || ""}
                            style={styles.boxAuth}
                        />
                        <TextInput
                            placeholder="CNPJ"
                            onChangeText={(texto) => handleInputChange("cnpj", texto)}
                            value={formUsuario.cnpj || ""}
                            style={styles.boxAuth}
                        />
                        <TouchableOpacity style={[styles.boxAuth]}onPress={selecionaFoto}>
                        {imagePath === '' ? (
                            <Text style={styles.boxAuthText}>Selecionar imagem</Text>
                        ) : (
                            <Text style={[styles.boxAuthText, {alignItems: "center"}]}>imagem(1).png</Text>
                        )}
                        </TouchableOpacity>
                    </>
                );

            case "motorista":
                return (
                    <>
                        <TextInput
                            placeholder="CNH"
                            onChangeText={(texto) => handleInputChange("cnh", texto)}
                            value={formUsuario.cnh || ""}
                            style={styles.boxAuth}
                        />
                        <TextInput
                            placeholder="CPF"
                            onChangeText={(texto) => handleInputChange("cpf", texto)}
                            value={formUsuario.cpf || ""}
                            style={styles.boxAuth}
                        />

                        <TouchableOpacity style={styles.boxAuth} onPress={showPicker}>
                        <DateTimePicker 
                            isVisible={PickerVisible}
                            mode='date'
                            onCancel={hidePicker}
                            onConfirm={handleConfirm}
                        />
                        {dataFinal === '' ? (
                            <Text style={styles.boxAuthText}>Data de nascimento</Text>
                        ) : (
                            <Text style={styles.boxAuthText}>{dataFinal}</Text>
                        )}
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boxAuth} onPress={selecionaFoto}>
                        {imagePath === '' ? (
                            <Text style={styles.boxAuthText}>Selecionar imagem</Text>
                        ) : (
                            <Text style={[styles.boxAuthText, {alignItems: "center"}]}>imagem(1).png</Text>
                        )}
                        </TouchableOpacity>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={[styles.buttonContainer,  {margin: 20}]}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.buttonContainer}>
                    <Image source={require('../assets/JaPedeLogo.png')} style={{height: 130, width: "70%", margin: 20,}}/>
                        <Picker
                            selectedValue={tipoUsuario}
                            onValueChange={(itemValue) => handleInputChange("tipo",itemValue)}
                            style={styles.boxAuth}
                        >
                            <Picker.Item label="Usuário" value="usuario" />
                            <Picker.Item label="Estabelecimento" value="estabelecimento" />
                            <Picker.Item label="Motorista" value="motorista" />
                        </Picker>

                        <TextInput
                            placeholder="Nome"
                            onChangeText={(texto) => handleInputChange("nome", texto)}
                            value={formUsuario.nome || ""}
                            style={styles.boxAuth}
                        />
                        <TextInput
                            placeholder="Email"
                            onChangeText={(texto) => handleInputChange("email", texto)}
                            value={formUsuario.email || ""}
                            style={styles.boxAuth}
                        />
                        <TextInput
                            placeholder="Senha"
                            onChangeText={(texto) => handleInputChange("senha", texto)}
                            secureTextEntry
                            value={formUsuario.senha || ""}
                            style={styles.boxAuth}
                        />

                        {/* Campos adicionais baseados no tipo */}
                        {renderFormFields()}
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={handleSignUp}
                        >
                            <Text style={[styles.buttonText,{color: "white"}]}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Registro;