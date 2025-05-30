import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import ChatBox from './screens/ChatBox';
import InfluencerPage from './screens/InfluencerPage';
import MainScreen from './screens/MainScreen';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Temp from './screens/Temp';
import Registration from './screens/Registration'


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Genty: require('../assets/fonts/GentyDemo-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false , animation: 'none'}} >
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Chat" component={ChatBox} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Temp" component={Temp} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="InfluencerPage" component={InfluencerPage} />
      </Stack.Navigator>
  );
}

