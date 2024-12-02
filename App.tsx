//Ferramentas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Páginas
import Home from "./screens/Home";
import Principal from './screens/Principal';
import Registro from './screens/Registro';
import Login from "./screens/Login";
import Inicio from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false}}/>
        <Stack.Screen name="Registro" component={Registro} options={{ headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
      </Stack.Navigator>    
    </NavigationContainer>
  );
}