import react, { FunctionComponent } from "react";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/ProfileIcon";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//image
import Avi from "./../assets/avi/avatar.png";
import {Text, View, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "./../components/colors";
import Home from "../screens/Home";
import WelcomeScreen from "../screens/WelcomeScreen";


const Tab = createMaterialTopTabNavigator();

const TopBar: FunctionComponent = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        >
            <Tab.Screen name="Home" component={Home} options={{
                    tabBarLabel: (props) => (
                        <Greeting
                        mainText="Hey Natalie!"
                        subText="welcome Back"
                        {...props}/>
                    ),

                }} />
            <Tab.Screen name="Welcome" component={WelcomeScreen} options={{tabBarLabel: "Welcome"}} />

        </Tab.Navigator>
    )
};

/* export default TopBar */