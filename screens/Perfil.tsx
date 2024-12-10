import { ScrollView, Text, View, Image, TouchableOpacity} from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";



const Perfil = () => {
//functions

    const navigation = useNavigation();

    const listarMotoristas = () => {
        navigation.navigate("Listar Motoristas");
    }

    const irParaMensagens = () => {
        navigation.navigate("Mensagens");
    }

    const listarEstabelecimentos = () => {
        navigation.navigate('Listar Estabelecimentos');
    }

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login");    
            })
    }

    return(
    <View style={[styles.container]}>
        
        <ScrollView style={styles.scroll}>
            <Image source={require('../assets/JaPedeLogo.png')} style={{height: 150, width: "100%"}}/>

            <View style={[styles.buttonContainer, {width: "100%"}]}>


            <TouchableOpacity style={styles.boxPerfil} onPress={handleSignOut}>
                    <View style={[styles.containerPerfil]}>
                        <Text style={styles.text}>Acessar Perfil </Text>
                        <Image source={require("../assets/setinha.png")} style={styles.setaPerfil}/>
                    </View>
            </TouchableOpacity>

                <TouchableOpacity style={styles.boxPerfil} onPress={irParaMensagens}>
                <View style={[styles.containerPerfil]}>
                        <Text style={styles.text}>Mensagens </Text>
                        <Image source={require("../assets/setinha.png")} style={styles.setaPerfil}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxPerfil}>
                <View style={[styles.containerPerfil]}>
                        <Text style={styles.text}>Notificações </Text>
                        <Image source={require("../assets/setinha.png")} style={styles.setaPerfil}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxPerfil}>
                    <View style={[styles.containerPerfil]}>
                        <Text style={styles.text}>Endereços </Text>
                        <Image source={require("../assets/setinha.png")} style={styles.setaPerfil}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxPerfil}>
                    <View style={[styles.containerPerfil]}>
                        <Text style={styles.text}>Dados bancários </Text>
                        <Image source={require("../assets/setinha.png")} style={styles.setaPerfil}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxPerfil} onPress={listarMotoristas}>
                    <View style={[styles.containerPerfil]}>
                        <Text style={styles.text}>Lista de Motoristas </Text>
                        <Image source={require("../assets/setinha.png")} style={styles.setaPerfil}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxPerfil} onPress={listarEstabelecimentos}>
                    <View style={[styles.containerPerfil]}>
                        <Text style={styles.text}>Favoritos </Text>
                        <Image source={require("../assets/setinha.png")} style={styles.setaPerfil}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.boxPerfil, {height: 90, borderColor: "#d70f0f", borderWidth: 3, marginVertical: 10}]} onPress={handleSignOut}>
                    <View style={[styles.containerPerfil]}>
                        <Text style={[styles.text, {color: "#d70f0f"}]}>Deslogar </Text>
                        <Image source={require("../assets/saida.png")}
                         style={{height: "90%",width: 45,}}/>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    </View>
    );
}


export default Perfil;