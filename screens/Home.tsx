import { Text, View, TouchableOpacity, TextInput } from "react-native";
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
            <Text>Bem-vindo a nossa primeira página</Text>
        </View>
    );
}

export default Home;