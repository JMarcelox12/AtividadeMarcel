import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text} from "react-native";

const Login = () => {

    const navigation = useNavigation();

    const irParaRegistro = () => {
    }
    const irParaPrincipal = () => {
    }
    const voltar = () => {
        navigation.replace('Home')
    }


    return(
        <View style={[styles.container]}>
            <Text>Bem-vindo a minha terceira página</Text>
        </View>
    );
}

export default Login;