import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../firebase';
import { FlatList, View, TextInput, TouchableOpacity, Text, ActivityIndicator, Image } from "react-native";
import estilo from '../estilo';
import { Alimento } from '../model/Alimento';
import { SafeAreaView } from "react-native-safe-area-context";

const AlimentoListar = () => {
    const [loading, setLoading] = useState(true);
    const [atualizar, setAtualizar] = useState(true);
    const [alimento, setAlimento] = useState<Alimento[]>([]); // Array em branco

    const refAlimento = firestore.collection("Estabelecimento")
        .doc(auth.currentUser?.uid)
        .collection("Alimento")

    //FLATLIST
    useEffect(() => {
        if (loading){
            listarTodos();
        }
    }, [alimento]);

    const listarTodos = () => {
        const subscriber = refAlimento
        .onSnapshot((querySnapshot) => {
            const alimento = [];
            querySnapshot.forEach((documentSnapshot) => {
                alimento.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id
                });
            });
            setAlimento(alimento);
            setLoading(false);
            setAtualizar(false);
        });
        return () => subscriber();
    }

    if (loading){
        return <ActivityIndicator 
                    size="60" 
                    color="#0782F9"
                    style={estilo.tela}
                />
    }


    const renderItem = ({ item }) => <Item item={item} />
    const Item = ({ item }) => (
        <View style={estilo.item}>
            <Text style={estilo.titulo}>Nome: {item.nome}</Text>
            <Text style={estilo.titulo}>Descrição: {item.descricao}</Text>
            <Text style={estilo.titulo}>Preço: {item.preco}</Text>
            <Image source={{ uri: item.urlfoto }} style={estilo.imagem}/>
        </View>
    )

    return (
        <View style={estilo.container}>
            <FlatList 
                data={alimento}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                refreshing={atualizar}
                onRefresh={ () => listarTodos() }
            />
        </View>
    )



}
export default AlimentoListar;