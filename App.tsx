//Ferramentas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';

//Páginas
import Home from "./screens/Home";
import Registro from './screens/Registro';
import Login from "./screens/Login";
import Menu from "./screens/Menu";
import Perfil from "./screens/Perfil"

const Tab = createBottomTabNavigator(); 
const Stack = createStackNavigator();


// Configurando o Bottom Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Menu') {
            iconName = 'menu';
          } else if (route.name === "Perfil"){
            iconName = "person";
          } else if (route.name === "Pesquisa"){
            iconName = "search";
          } else if (route.name === "Carrinho"){
            iconName = "cart";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },headerStyle: {
          backgroundColor: 'red', // Cor do cabeçalho
          },
          tabBarStyle: {
            backgroundColor: 'red', // Cor da barra de abas
          },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pesquisa" component={Registro}/>
      <Tab.Screen name="Carrinho" component={Login}/>
      <Tab.Screen name="Perfil" component={Perfil}/>
      <Tab.Screen name="Menu" component={Menu}/>
    </Tab.Navigator>
  );
}

// Configurando o Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: 'red', // Cor do cabeçalho
          },
        }}>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={Registro} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}