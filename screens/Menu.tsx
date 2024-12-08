import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import styles from "../styles";


const Drawer = createDrawerNavigator();

export default function Menu () {
    return(
        <View style={styles.container}></View>
    )
}