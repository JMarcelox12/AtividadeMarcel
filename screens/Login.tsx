import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, KeyboardAvoidingView, TextInput, Image, ScrollView} from "react-native";
import { auth } from "../firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        const logout = auth.onAuthStateChanged((user: firebase.User | null) => {
            if (user) navigation.replace("Menu");
        })
    })

    const irParaRegistro = () => {
        navigation.navigate("Registro");
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, senha)
        .then((userCredentials: firebase.auth.UserCredential) => {
            const user = userCredentials.user;
            if (user) console.log('Logado como ', user.email);
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