//Ferramentas
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { View, Text, Button} from 'react-native';

//Páginas
import HomeUsuario from "./screens/HomeUsuario";
import Registro from './screens/Registro';
import Login from "./screens/Login";
import Mensagens from "./screens/Mensagens";
import Perfil from "./screens/Perfil";
import ListarMotorista from './screens/ListarMotorista';
import ListarEstabelecimento from "./screens/ListarEstabelecimento";
import HomeEstabelecimento from './screens/HomeEstabelecimento';
import HomeMotorista from './screens/HomeMotorista';
import Inicio from './screens/Inicio';



const Tab = createBottomTabNavigator(); 
const Stack = createStackNavigator();
const navigation = useNavigation();

useEffect(() => {
  //verifica se usuário está logado ou não
  const VerificaLogin = auth.onAuthStateChanged((user) => {
      if (user) {
          console.log("Usuário logado:", user.email);
          navigation.replace("Home");
      } else {
          console.log("Nenhum usuário logado.");
          navigation.replace("Login");
      }
  });

  return () => VerificaLogin();
}, []);

const ScreenOne = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela 1</Text>
  </View>
);

const ScreenTwo = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela 2</Text>
  </View>
);

function TabNavigator() {
  const [tipoUsuario] = useState(auth.currentUser?.tipo || "usuario");

  return (
    //verifica o tipo de usuário para o bottom tabs
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

        if(tipoUsuario === "usuario"){
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Conversas') {
            iconName = 'chatbox-ellipses';
          } else if (route.name === "Perfil"){
            iconName = "person";
          } else if (route.name === "Pesquisa"){
            iconName = "search";
          } else if (route.name === "Carrinho"){
            iconName = "cart";
          }
        }else if(tipoUsuario === "estabelecimento"){
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Conversas') {
            iconName = 'chatbox-ellipses';
          } else if (route.name === "Perfil"){
            iconName = "person";
          } else if (route.name === "Pesquisa"){
            iconName = "search";
          } else if (route.name === "Carrinho"){
            iconName = "cart";
          }
        }else if(tipoUsuario === "motorista"){
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Conversas') {
            iconName = 'chatbox-ellipses';
          } else if (route.name === "Perfil"){
            iconName = "person";
          } else if (route.name === "Pesquisa"){
            iconName = "search";
          } else if (route.name === "Carrinho"){
            iconName = "cart";
          }
        }

          return <Icon name={iconName} size={size} color={color} />;
        },headerStyle: {
          backgroundColor: '#d70f0f',
          },
          tabBarStyle: {
            backgroundColor: '#d70f0f',
            position: "absolute",
          },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
      })}
    >
      <Tab.Screen name="Carrinho" component={Login}/>
      <Tab.Screen name="Home" component={HomeUsuario} />
      <Tab.Screen name="Pesquisa" component={Registro}/>
      <Tab.Screen name="Perfil" component={Perfil}/>
      <Tab.Screen name="Conversas" component={Mensagens}/>
    </Tab.Navigator>
  );
}

// Configurando o Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#d70f0f',
          },
        }}>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeUsuario"  component={HomeUsuario}/> 
        <Stack.Screen name="HomeEstabelecimento"  component={HomeEstabelecimento}/> 
        <Stack.Screen name="HomeMotorista"  component={HomeMotorista}/> 
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Mensagens" component={Mensagens}/>
        <Stack.Screen name="Listar Estabelecimentos" component={ListarEstabelecimento}/>
        <Stack.Screen 
            name="ScreenOne" 
            component={ScreenOne} 
            options={{
                title: 'Tela 1',
                headerRight: () => (
                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                        <Button title="Botão 1" onPress={() => alert('Botão 1 clicado!')} />
                        <Button title="Botão 2" onPress={() => alert('Botão 2 clicado!')} />
                    </View>
                ),
            }}
        />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="Listar Motoristas" component={ListarMotorista}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}