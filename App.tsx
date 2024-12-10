//Ferramentas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import { useContext, useState } from 'react';

//Páginas
import Home from "./screens/Home";
import Registro from './screens/Registro';
import Login from "./screens/Login";
import Mensagens from "./screens/Mensagens";
import Perfil from "./screens/Perfil";
import ListarMotorista from './screens/ListarMotorista';
import ListarEstabelecimento from "./screens/ListarEstabelecimento";


const Tab = createBottomTabNavigator(); 
const Stack = createStackNavigator();


function TabNavigator() {
  const { user } = useContext(userContext);
  const [tipoUsuario] = useState(user.tipo);

  return (
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
        }else{
          alert("Error 404 found");
        }

          return <Icon name={iconName} size={size} color={color} />;
        },headerStyle: {
          backgroundColor: '#d70f0f', // Cor do cabeçalho
          },
          tabBarStyle: {
            backgroundColor: '#d70f0f', // Cor da barra de abas
            position: "absolute",
          },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pesquisa" component={Registro}/>
      <Tab.Screen name="Carrinho" component={Login}/>
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
            backgroundColor: '#d70f0f', // Cor do cabeçalho
          },
        }}>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home"  component={Home}/> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Mensagens" component={Mensagens}/>
        <Stack.Screen name="Listar Estabelecimentos" component={ListarEstabelecimento}/>
        <Stack.Screen name="Listar Motoristas" component={ListarMotorista}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}