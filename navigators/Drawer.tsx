import react, { FunctionComponent } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer} from "@react-navigation/native";
import {ScreenWidth} from "../components/shared";
import { colors } from "../components/colors";
import DrawerContent from "../components/DrawerContent";
import { useTranslation } from "react-i18next";
import BottomBar from "./BottomBar";

const Drawer = createDrawerNavigator();

const MyDrawer: FunctionComponent = (props) => {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
        <Drawer.Navigator 
            drawerContent={props => <DrawerContent children={undefined} route={undefined} {...props} />}
                screenOptions={{   
                    drawerPosition: 'right',
                    drawerStyle: {
                        backgroundColor: colors.orange,
                        width: ScreenWidth * 0.6,
                    }
                }}
                initialRouteName="HomeDrawer">
                <Drawer.Screen name="HomeDrawer" component={BottomBar} options={{headerShown: false}}/>
        </Drawer.Navigator>
        </NavigationContainer>
  );
}

export default MyDrawer;