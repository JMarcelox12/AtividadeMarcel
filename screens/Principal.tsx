import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

const Principal = () => {
    const irParaCarrinho = () => {}

    return(
        <View style={[styles.container]}>
            <Text>Bem-vindos à minha segunda página</Text>
        </View>
    );
}

export default Principal;