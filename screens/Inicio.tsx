import {TouchableOpacity, View, Image } from "react-native";
import styles from "../styles";
import { useState } from "react";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

const Inicio = () => {
    const[ModalVisible, setModalVisible] = useState(true);

    const navigation = useNavigation();

    const mudaModal = () => {
        setModalVisible(!ModalVisible); 
    }

    const irParaLogin = () => {
        navigation.replace("Login")
    }

    const botao = () => {
        mudaModal(),
        irParaLogin()
    }
    
    return(
        <View>
        <Modal 
        isVisible={ModalVisible}
        animationInTiming={1000}
        animationOut={'bounceOut'}
        animationOutTiming={1000}
        backdropOpacity={0.8}
        onBackdropPress={mudaModal}
        >
        <View style={styles.container}>
          <TouchableOpacity onPress={botao} style={{height: "105%", width: "100%", alignItems:"center"}}>
            <Image 
              source={require('../assets/logo.png')} 
              style={{height: '110%', width: '120%'}}
            />
          </TouchableOpacity>
        </View>
      </Modal>
        </View>
    );
}

export default Inicio;