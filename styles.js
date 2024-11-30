 import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    //Universais
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cabecalho: {
        backgroundColor: "#d70f0f",
        height: "30%",
        width: "100%"
    },
    rodape: {
        backgroundColor: "#d70f0f",
        height: "20%",
        width: "100%",
    },
    text: {
        fontSize: 10,
        color: "black",
    },
    //Autenticação
    //Listagem
    //Cadastro
    boxAuth: {
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 10,
        height: 30,
        width: "70%",
        backgroundColor: 'white'
    },
 })

 export default styles;