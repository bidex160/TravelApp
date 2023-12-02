import 'react-native-gesture-handler';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AttractionDetails from './screens/AttractionDetails';
import Gallery from './screens/Gallery';
const Stack = createStackNavigator();

const  App = () => {
  return (
   <NavigationContainer> 
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="AttractionDetails" component={AttractionDetails}></Stack.Screen>
      <Stack.Screen name="HomeGallery" component={Gallery}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App
