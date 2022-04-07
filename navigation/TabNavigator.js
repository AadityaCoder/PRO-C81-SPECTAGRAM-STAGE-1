import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ }) => ( {
                tabBarIcon: ( { focused, color, size } ) => {
                     var iconName;
                     if (route.name === 'Feed') {
                         iconName = focused
                            ? 'book'
                            : 'book-outline';
                     } else if (route.name === 'CreatePost'){
                         iconName = focused ? 'create' : "create-outline";

                     }
                     return <Ionicons name={iconName} size={size} color={color} />;
                 },
             })}
             tabBarOptions={{
                 activeTintColor: 'tomato',
                 inactiveTintColor: 'gray',
            }}
           >
              <Tab.Screen name="Feed" Component={Feed} />
              <Tab.Screen name="CreatePost" Component={CreatePost} />
              </Tab.Navigator>

);
}
 
export default BottomTabNavigator






























































