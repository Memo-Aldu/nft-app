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
import Cart from "../screens/Cart";
//nav
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {useNavigation} from "@react-navigation/native";
//image
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ShoppingCartIcon from "../components/Cart/ShoppingCartIcon";
import { ScreenWidth } from "../components/shared";

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
    <CustomTabBarView style={{
        backgroundColor: colors.darkGrey,
        position: 'absolute',
        bottom: 10,
        marginHorizontal: 20,
        height: 60,
        width: ScreenWidth * 0.9,
        borderRadius: 10,
        // shadow
        shadowColor: colors.black,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.06,
    }}>
        {state.routes.map((route:any, index:any) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel !== undefined
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
                    <TabBarIcon focused={isFocused} size={20} color={isFocused ? colors.orange: colors.lightGrey}/>
                    <Text style={{color: isFocused ? colors.lightGrey: colors.darkGrey, fontSize: 12}}>{isFocused && label}</Text>
                    {isFocused && label !== "Cart" && ( // black line indicator
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
                    <Ionicons color={props.color} size={props.size} name={"home"}/>,

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
                    <Ionicons color={props.color} size={props.size} name={"search"}/>,
                    headerTitle: (props) => (
                        <Greeting
                        mainText={t("Search.Header") }
                        subText={t("Search.HeaderSub") }
                        {...props}/>
                    ),
                    headerLeft: () => <></>
                }}/>
                <Tab.Screen name="Cart" component={Cart} 
                options={{
                    headerTitleAlign: 'left',
                    headerTitle: (props) => (
                        <Greeting
                            mainText={t("Cart.Header") }
                            subText={t("Cart.HeaderSub") }
                        {...props}/>
                    ),
                    tabBarIcon:(props: TabBarIconProps) => (
                        <TouchableOpacity>
                            <View style={{
                                width: 50,
                                height: 50,
                                backgroundColor: colors.orange,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 25,
                            }}>
                            <ShoppingCartIcon/>
                            </View>
                        </TouchableOpacity>

                    )
                }}/>
                <Tab.Screen name="Ranking" component={Ranking} 
                options={{
                    headerTitleAlign: 'left',
                    tabBarIcon:(props: TabBarIconProps) => 
                    <Ionicons color={props.color} size={props.size} name={"stats-chart"}/>,
                    headerTitle: (props) => (
                        <Greeting
                        mainText={t("Ranking.Header") }
                        subText={t("Ranking.HeaderSub") }
                        {...props}/>
                    ),
                    headerLeft: () => <></>
                }}/>
                <Tab.Screen name="Profile" component={Profile} options={{headerShown: false,
                    tabBarIcon:(props: TabBarIconProps) => 
                    <Ionicons color={props.color} size={props.size} name="person"/>}}/> 
                <Tab.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/> 
                <Tab.Screen name="NFTDetails" component={NFTDetailsScreen} options={{headerShown: false}}/>
                <Tab.Screen name="Info" component={Info} options={{
                    headerTitleAlign: 'left',
                    headerTitle: (props) => (
                        <Greeting
                            mainText={t("Info.Header") }
                            subText={t("Info.HeaderSub") }
                        {...props}/>
                    ),
                    headerLeft: () => <></>
                }}/>
            </Tab.Navigator>
    );
}

export default BottomBar;