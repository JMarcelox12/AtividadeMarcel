import { ScrollView, Text, View, Image, TouchableOpacity} from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";



const Mensagens = () => {
//functions

    const navigation = useNavigation();

    const irParaHome = () => {
        navigation.navigate("Home");
    }

    return(
    <View style={[styles.container]}>
        <Image source={require('../assets/JaPedeLogo.png')} style={{height: 130, width: "100%", margin: 10,}}/>

        <ScrollView style={styles.scroll}>

            <View style={[styles.buttonContainer, {width: "100%"}]}>

                <TouchableOpacity style={styles.boxPerfil}>
                    <Text style={styles.text}>Mensagens</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxPerfil}>
                    <Text style={styles.text}>Notificações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxPerfil}>
                    <Text style={styles.text}>Dados da conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxPerfil}>
                    <Text style={styles.text}>Mensagens</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxPerfil}>
                    <Text style={styles.text}>Notificações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxPerfil}>
                    <Text style={styles.text}>Dados da conta</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    </View>
    );
}


export default Mensagens;