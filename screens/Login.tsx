import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, KeyboardAvoidingView, TextInput, Image, ScrollView} from "react-native";
import { auth, firestore } from "../firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    const irParaRegistro = () => {
        navigation.navigate("Registro");
    }

    useEffect(() => {
        const logout = auth.onAuthStateChanged((user: firebase.User | null) => {
            if (user) navigation.replace("HomeUsuario");
        })
    })

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, senha)
        .then(async userCredentials => {
            const user = userCredentials.user;

        const userDoc = await firestore.collection('users').doc(user.uid).get();
            if (!userDoc.exists) {
            alert("User data not found!");
            return;
            }

        const { tipo: tipoUsuario } = userDoc.data();

            alert(tipoUsuario)

            if (tipoUsuario === "usuario") {
                navigation.replace("UsuarioHome"); 
              } else if (tipoUsuario === "estabelecimento") {
                navigation.replace("EstabelecimentoHome"); 
              } else if (tipoUsuario === "motorista") {
                navigation.replace("MotoristaHome");
              } else {
                alert("Tipo de usuário não reconhecido!");
              }
        })
        .catch((error) => alert(error.message))
    }


    return(
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={[styles.buttonContainer, {margin: 20}]}>
        <ScrollView style={styles.scroll}>
        <View style={styles.buttonContainer}>
        <Image source={require('../assets/JaPedeLogo.png')} style={{height: 130, width: "70%", margin: 20,}}/>
            <TextInput 
                placeholder="Email" 
                onChangeText={texto => setEmail(texto)}
                style={styles.boxAuth} 
            />
            <TextInput 
                placeholder="Senha" 
                onChangeText={texto => setSenha(texto)} 
                secureTextEntry
                style={styles.boxAuth} 
            />
        </View> 
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={irParaRegistro}
            >
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    </KeyboardAvoidingView>
    );
}

export default Login;