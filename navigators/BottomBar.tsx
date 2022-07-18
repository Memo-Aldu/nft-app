import react, { FunctionComponent } from "react";
import { colors } from "../components/colors";
import Greeting from "../components/Header/Greeting";
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { I18nextProvider, useTranslation } from "react-i18next";
import ProfileIcon from "../components/Header/ProfileIcon";
import Drawer from './Drawer';
import { DrawerActions } from '@react-navigation/native';

//screens
import Home from '../screens/Home';
import WelcomeScreen  from '../screens/WelcomeScreen';
import Search from '../screens/Search';
import Ranking from "../screens/Ranking";
import Profile from "../screens/Profile";
import Info from "../screens/Info";
import NFTDetailsScreen from "../screens/NFTDetailsScreen";
//nav
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation} from "@react-navigation/native";
//image
import Avi from "./../assets/avi/avatar.png";
import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ShoppingCartIcon from "../components/ShoppingCart/ShoppingCartIcon";

const CustomTabBarView = styled.View`
    flex-direction: row;
    padding: 10px;
    background-color: ${colors.white};
    border-top-width: 0.3px;
    border-color: ${colors.lightGrey};
    align-items: center;
    justify-content: space-between;
`;

interface TabBarIconProps {
    focused: boolean;
    color: string;
    size: number;
}

interface MyTabBarProps {
    state: any;
    descriptors: any;
    navigation: any;
}

const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };




const MyCustomTabBar = ({ state, descriptors, navigation }: MyTabBarProps ) => {
    return (
    <CustomTabBarView>
        {state.routes.map((route:any, index:any) => {
            const { options } = descriptors[route.key];
            const label =
            options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            const isFocused = state.index === index;
            const TabBarIcon = options.tabBarIcon;
            if (TabBarIcon === undefined) {
                return null;
            }
            return (
                <TouchableOpacity
                key={route.key}
                onPress={() => navigation.navigate(route.name)}
                 style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                    <TabBarIcon focused={isFocused} size={30} color={isFocused ? colors.primary:colors.darkGrey}/>
                    <Text style={{color: isFocused ? colors.primary:colors.darkGrey, fontSize: 10}}>{label}</Text>
                    {isFocused && ( // black line indicator
                        <View style={{height:6, width:30, position: 
                            "absolute", backgroundColor: colors.black, top: -11, 
                            borderBottomLeftRadius: 6, borderBottomRightRadius: 6}}/>)}

                </TouchableOpacity>
            )
        })}
    </CustomTabBarView>
    );
}

const Tab = createBottomTabNavigator();

const BottomBar: FunctionComponent = (props) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = () => {
        console.log("change language");
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }
    const navigation = useNavigation();
    const closeDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };
    return (

            <Tab.Navigator
                screenOptions={{   
                    tabBarShowLabel: false,                
                    tabBarStyle: {
                        height: 70,
                    },
                    headerStyle: {
                        backgroundColor: colors.lightGrey,
                        borderBottomWidth: 0,
                        shadowColor: "transparent",
                        shadowOpacity: 0,
                        elevation: 0,
                        height: 120,
                    },
                    headerTintColor: colors.secondary,
                    headerRightContainerStyle: {
                        paddingRight: 25,
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 10,
                    },
                    headerRight: () => (
                        <Ionicons.Button name="ios-menu" size={25} color={colors.secondary}  backgroundColor="transparent"
                            onPress={closeDrawer}></Ionicons.Button>
                    ),
/*                         <ProfileIcon
                            img={Avi}
                            imgContainerStyle={{
                                backgroundColor: colors.tertiary,
                            }}
                            onPress={changeLanguage}
                        /> */
                    
                }}
                tabBar={(props) => (
                    <MyCustomTabBar {...props} />
                )}
                initialRouteName="Home">
                <Tab.Screen name="Home" component={Home} 
                options={{
                    headerTitleAlign: 'left',
                    tabBarIcon:(props: TabBarIconProps) => 
                    <Ionicons color={props.color} size={props.size} name={props.focused ? "home":"home-outline"}/>,

                    headerTitle: (props) => (
                        <Greeting
                        mainText={t("Home.Header") + " " + "Natalie"}
                        subText={t("Home.HeaderSub") + "!"}
                        {...props}/>
                    ),
                    headerLeft: () => <></>
                }}/>
                <Tab.Screen name="Search" component={Search} 
                options={{
                    headerTitleAlign: 'left',
                    tabBarIcon:(props: TabBarIconProps) => 
                    <Ionicons color={props.color} size={props.size} name={props.focused ? "search":"search-outline"}/>,
                    headerTitle: (props) => (
                        <Greeting
                        mainText={t("Search.Header") }
                        subText={t("Search.HeaderSub") }
                        {...props}/>
                    ),
                    headerLeft: () => <></>
                }}/>
                <Tab.Screen name="Ranking" component={Ranking} 
                options={{
                    headerTitleAlign: 'left',
                    tabBarIcon:(props: TabBarIconProps) => 
                    <Ionicons color={props.color} size={props.size} name={props.focused ? "stats-chart":"stats-chart-outline"}/>,
                    headerTitle: (props) => (
                        <Greeting
                        mainText={t("Ranking.Header") }
                        subText={t("Ranking.HeaderSub") }
                        {...props}/>
                    ),
                    headerLeft: () => <></>
                }}/>
                <Tab.Screen name="Cart" component={Info} 
                options={{
                    headerTitleAlign: 'left',
                    tabBarIcon:(props: TabBarIconProps) => (<ShoppingCartIcon></ShoppingCartIcon>)
                }}/>
                <Tab.Screen name="Profile" component={Profile} options={{headerShown: false,
                    tabBarIcon:(props: TabBarIconProps) => 
                    <Ionicons color={props.color} size={props.size} name={props.focused ? "person":"person-outline"}/>}}/> 
                <Tab.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/> 
                <Tab.Screen name="NFTDetails" component={NFTDetailsScreen} options={{headerShown: false}}/>
            </Tab.Navigator>
    );
}

export default BottomBar;