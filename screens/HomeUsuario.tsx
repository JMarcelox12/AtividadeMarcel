import { Text, View, TouchableOpacity, TextInput, ScrollView, Button, Image } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Modal from 'react-native-modal'
import { createDrawerNavigator } from "@react-navigation/drawer";

const HomeUsuario = () => {

    const navigation = useNavigation();
    //const Drawer = createDrawerNavigator();

    const irParaRegistro = () => {
        navigation.navigate('Registro');
    }
    const irParaLogin = () => {
        navigation.navigate('Login');
    }
    const listarEstabelecimentos = () => {
        navigation.navigate('Listar Estabelecimentos');
    }
    const listarMotoristas = () => {
        navigation.navigate('Listar Motoristas');
    }

    return(
        <View style={[styles.container]}>
            <ScrollView style={styles.scroll}>
            <Image source={require('../assets/JaPedeLogo.png')} style={{height: 150, width: "100%", marginEnd: 10, marginBottom: 10,}}/>

            <View style={{flexDirection: "column"}}>
                <View style={styles.areaLateral}>
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

            <Text style={styles.text}>Mais vendidos perto de você </Text>
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

            <Text style={styles.text}>Culinária Brasileira </Text>
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

            <Text style={styles.text}>Culinária Europeia </Text>
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

            <Text style={styles.text}>Culinária Oriental </Text>
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

            <Text style={styles.text}>Culinária Americana </Text>
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

            <Text style={styles.text}>Resto do Mundo </Text>
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
            
      </ScrollView>
        </View>
    );
}

export default HomeUsuario;