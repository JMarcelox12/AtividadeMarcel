import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "../styles"
import { useEffect, useState } from "react";
import { auth, firestore } from "../firebase";
import { useNavigation } from "@react-navigation/native";


const Registro = () => {
const [formUsuario, setFormUsuario]=
    useState<Partial<Usuario>>({})

    const refUsuario=firestore.collection("Usuario");

    const navigation = useNavigation();

    useEffect(() => {
        const logout = auth.onAuthStateChanged((user: any) => {
            if (user) navigation.replace("Home");
        })
    })

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(formUsuario.email, formUsuario.senha)
            .then((userCredentials: { user: any; }) => {
                const user = userCredentials.user;
                console.log('Registrado como ', user.email);

                const refIdUsuario = refUsuario.doc(auth.currentUser.uid);
                refIdUsuario.set({
                    id: auth.currentUser.uid,
                    nome: formUsuario.nome,
                    email: formUsuario.email,
                    senha: formUsuario.senha,
                    datanasc: formUsuario.datanasc
                })

            })
            .catch((error: { message: any; }) => alert(error.message))
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.buttonContainer}>
                <TextInput 
                    placeholder="Nome" 
                    onChangeText={texto => setFormUsuario({
                        ...formUsuario,
                        nome: texto
                    }) }
                    style={styles.boxAuth} 
                />
                <TextInput 
                    placeholder="Email" 
                    onChangeText={texto => setFormUsuario({
                        ...formUsuario,
                        email: texto
                    }) }
                    style={styles.boxAuth} 
                />
                <TextInput 
                    placeholder="Senha" 
                    onChangeText={texto => setFormUsuario({
                        ...formUsuario,
                        senha: texto
                    }) }
                    secureTextEntry
                    style={styles.boxAuth} 
                />
                <TextInput 
                    placeholder="Data Nascimento" 
                    onChangeText={texto => setFormUsuario({
                        ...formUsuario,
                        datanasc: texto
                    }) }
                    style={styles.boxAuth} 
                />
            </View> 
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, styles.buttonOutline]}
                    onPress={handleSignUp}
                >
                    <Text style={[styles.buttonText, styles.buttonOutlineText]}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );

}

export default Registro;