 import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    //Universais
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center', 
        marginEnd: 10,
    },
    text: {
        fontSize: 25,
        color: "black",
    },
    areaLateral: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    //Autenticação
    //Listagem
    //Inicio
    boxOne:{
        height: 70,
        width: "45%",
        backgroundColor: "blue",
        margin: 8,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    boxTwo:{
        height: 70,
        width: 170,
        backgroundColor: "red",
        marginLeft: 6,
        marginBottom: 5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginEnd: 5,
    },
    boxTree:{
        height: 110,
        width: 110,
        backgroundColor: "green",
        marginLeft: 6,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    //Cadastro
    boxAuth: {
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 10,
        height: 50,
        width: "70%",
        backgroundColor: 'white',
        margin: 10,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: 'red',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        margin: 10
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 15
    },
    buttonOutline: {
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 2
    },
    buttonOutlineText: {
        color: 'red'
    },
 })

 export default styles;