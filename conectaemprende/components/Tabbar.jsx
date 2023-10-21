import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ChatS from '../screens/ChatS';
import Chat from '../screens/Chat';

const HomeStack = createNativeStackNavigator();

export default function Tabbar() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="ChatS"
          component={ChatS}
          options={{
            tabBarLabel: 'ChatS',
            tabBarIcon: ({ color, size }) => (
              <IconButton icon="home-outline" iconColor={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <IconButton icon="bell" iconColor={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
  
      </Tab.Navigator>
    );
  }