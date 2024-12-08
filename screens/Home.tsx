import { Text, View, TouchableOpacity, TextInput, ScrollView, Button, Image } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Modal from 'react-native-modal'
import { createDrawerNavigator } from "@react-navigation/drawer";

const Home = () => {
    const[ModalVisible, setModalVisible] = useState(true);

    const navigation = useNavigation();
    //const Drawer = createDrawerNavigator();

    const mudaModal = () => {
        setModalVisible(!ModalVisible); 
    }

    const irParaRegistro = () => {
        navigation.replace('Registro');
    }
    const irParaLogin = () => {
        navigation.replace('Login');
    }

    return(
        <View style={[styles.container]}>
            <ScrollView>

            <View style={{flexDirection: "column"}}>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.boxOne}>
                        <Text style={styles.text}>Slc 1 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxOne}>
                        <Text style={styles.text}>Slc2 </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.boxOne}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxOne}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.areaLateral}>
            <ScrollView horizontal={true}
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ paddingHorizontal: 1 }}>
                    <TouchableOpacity style={styles.boxTwo}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTwo}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTwo}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTwo}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTwo}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
            </ScrollView>
            </View>

            <View style={styles.areaLateral}>
            <ScrollView horizontal={true}
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ paddingHorizontal: 1 }}>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
            </ScrollView>
            </View>

            <View style={styles.areaLateral}>
            <ScrollView horizontal={true}
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ paddingHorizontal: 1 }}>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
            </ScrollView>
            </View>

            <View style={styles.areaLateral}>
            <ScrollView horizontal={true}
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ paddingHorizontal: 1 }}>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
            </ScrollView>
            </View>

            <View style={styles.areaLateral}>
            <ScrollView horizontal={true}
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ paddingHorizontal: 1 }}>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxTree}>
                        <Text style={styles.text}>Slc </Text>
                    </TouchableOpacity>
            </ScrollView>
            </View>


        <Modal 
        isVisible={ModalVisible}
        animationInTiming={1000}
        animationOut={'bounceOut'}
        animationOutTiming={1000}
        backdropOpacity={0.8}
        onBackdropPress={mudaModal}
        >
        <View style={styles.container}>
          <TouchableOpacity onPress={mudaModal} style={{height: "105%", width: "100%", alignItems:"center"}}>
            <Image 
              source={require('../assets/logo.png')} 
              style={{height: '110%', width: '120%'}}
            />
          </TouchableOpacity>
        </View>
      </Modal>
      </ScrollView>
        </View>
    );
}

export default Home;