import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, KeyboardAvoidingView, TextInput} from "react-native";
import { auth } from "../firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        const logout = auth.onAuthStateChanged((user: any) => {
            if (user) navigation.replace("Menu");
        })
    })

    const irParaRegistro = () => {
        navigation.replace("Registro");
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, senha)
        .then((userCredentials: { user: any; }) => {
            const user = userCredentials.user;
            console.log('Logado como ', user.email);
        })
        .catch((error: { message: any; }) => alert(error.message))
    }


    return(
        <KeyboardAvoidingView style={styles.container}>
        <View style={styles.buttonContainer}>
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
                <Text style={[styles.buttonText,{color: "white"}]}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, styles.buttonOutline]}
                onPress={irParaRegistro}
            >
                <Text style={[styles.buttonText, styles.buttonOutlineText]}>Registrar</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    );
}

export default Login;