import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/splash';
import Login from './screens/login';
import MarketplaceRoute from './routes/marketplaceRoute';
import AuthProvider from './hooks/auth/provider';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown:false}}>
          <Stack.Screen name="splash" component={Splash}/>
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="marketplace" component={MarketplaceRoute}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
