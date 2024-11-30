import { Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

    const irParaRegistro = () => {
        navigation.replace('');
    }
    const irParaLogin = () => {
        navigation.replace('');
    }

    return(
        <View style={[styles.container]}>
            <View style={styles.cabecalho}></View>
            <ScrollView>
                <View>
                    <Text style={styles.text}>bem-vindo ao meu novo home </Text>
                </View>
            </ScrollView>
            <View style={styles.rodape}></View>
        </View>
    );
}

export default Home;