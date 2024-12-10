import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../firebase';
import { FlatList, View, TextInput, TouchableOpacity, Text, ActivityIndicator, Image } from "react-native";
import styles from '../styles';
import { Motorista } from '../models/Motorista';
import { SafeAreaView } from "react-native-safe-area-context";

const ListarMotorista = () => {
    const [loading, setLoading] = useState(true);
    const [atualizar, setAtualizar] = useState(true);
    const [motorista, setMotorista] = useState<Motorista[]>([]); // Array em branco

    const refMotorista = firestore.collection("Motorista");

    //FLATLIST
    useEffect(() => {
        if (loading){
            listarTodos();
        }
    }, [motorista]);

    const listarTodos = () => {
        const subscriber = refMotorista
        .onSnapshot((querySnapshot) => {
            const motorista = [];
            querySnapshot.forEach((documentSnapshot) => {
                motorista.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id
                });
            });
            setMotorista(motorista);
            setLoading(false);
            setAtualizar(false);
        });
        return () => subscriber();
    }

    if (loading){
        return <ActivityIndicator 
                    size="60" 
                    color="#0782F9"
                    style={styles.tela}
                />
    }


    const renderItem = ({ item }) => <Item item={item} />
    const Item = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.text}>Nome: {item.nome}</Text>
            <Text style={styles.text}>Data de Nascimento: {item.datanasc}</Text>
            <Text style={styles.text}>CNH: {item.cnh}</Text>
            <Text style={styles.text}>CPF: {item.cpf}</Text>
            <Image source={{ uri: item.urlfoto }} style={styles.setaPerfil}/>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList 
                data={motorista}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                refreshing={atualizar}
                onRefresh={ () => listarTodos() }
            />
        </View>
    )



}
export default ListarMotorista;