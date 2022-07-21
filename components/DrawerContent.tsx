import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { StyleSheet, View} from "react-native"
import { colors } from './colors';
import ProfileIcon from "../components/Header/ProfileIcon";
import Icon from '@expo/vector-icons/Ionicons';

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,

} from '@react-navigation/drawer';
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppState } from "../store/type.d";
import { connect, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const DrawerView = styled.View`
    flex: 1;
`;

const UserInfoView = styled.View`
    padding: 20px;
`;

const Row = styled.View`
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
`;

const SectionView = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
`;


const styles = StyleSheet.create({
    BottomDrawerSection : {
        marginBottom: 15,
        borderTopWidth: 1,
        borderTopColor: colors.black,
    }
});

const PreferenceView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-vertical: 12px;
    padding-horizontal: 16px;
`;

interface DrawerContentProps {
    route: any;
    navigation: any;
    children: any;
}

interface DrawerBarIconProps {
    focused: boolean;
    color: string;
    size: number;
}
// todo: make the icons focus on click

const DrawerContent: FunctionComponent<DrawerContentProps> = (props: any) => {
    const [isRussian, setisRussian] = React.useState(false);
    const navigation = useNavigation();
    const {user} = useSelector(mapStateToProps);
    const {t, i18n} = useTranslation();
    const changeLanguage = () => {
        setisRussian(!isRussian);
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }

    return (
        <DrawerView>
            <DrawerContentScrollView {...props}>
                <View style={{flex: 1}}>
                    <UserInfoView>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <ProfileIcon
                                    imgStyle={{height:50, width: 50, borderRadius:25,  borderColor: colors.white}}
                                    img={user.avatar}
                                    onPress={() => {navigation.navigate("Profile" as never)}}
                                />
                            <View style={{marginLeft:15, flexDirection: "column"}}>
                                <Title style={{fontSize: 16, marginTop: 3, fontWeight: 'bold'}}>{user.firstName} {user.lastName}</Title>
                                <Caption style={{fontSize:14, lineHeight: 14}}>{user.asperand}</Caption>
                            </View>
                        </View>
                        <Row>
                            <SectionView>
                                <Paragraph style={{fontSize:14, lineHeight: 14, fontWeight: 'bold', marginRight:3}}>{user.collections.length}</Paragraph>
                                <Caption style={{fontSize:14, lineHeight: 14}}>Collected NFT</Caption>
                            </SectionView>
                            <SectionView>
                                <Paragraph style={{fontSize:14, lineHeight: 14, fontWeight: 'bold', marginRight:3}}>{user.balance}</Paragraph>
                                <Caption style={{fontSize:14, lineHeight: 14}}>ETH</Caption>
                            </SectionView>
                        </Row>
                    </UserInfoView>
                    <Drawer.Section style={{marginTop: 15}}>
                    <DrawerItem 
                        icon={(props: DrawerBarIconProps) => (
                            <Icon name={props.focused ? "home":"home-outline"} color={props.color} size={props.size} />
                        )}
                        label="Home"
                        onPress={() => {navigation.navigate('Home' as never)}}
                        />
                        <DrawerItem 
                        icon={(props: DrawerBarIconProps) => (
                            <Icon name={props.focused ? "search":"search-outline"} color={props.color} size={props.size} />
                        )}
                        label="Search"
                        onPress={() => {navigation.navigate('Search' as never)}}
                        />
                         <DrawerItem 
                        icon={(props: DrawerBarIconProps) => (
                            <Icon name={props.focused ? "stats-chart":"stats-chart-outline"} color={props.color} size={props.size} />
                        )}
                        label="Ranking"
                        onPress={() => {navigation.navigate('Ranking' as never)}}
                        />
                        <DrawerItem 
                        icon={(props: DrawerBarIconProps) => (
                            <Icon name={props.focused ? "information-circle":"information-circle-outline"} color={props.color} size={props.size} />
                        )}
                        label="Info"
                        onPress={() => {navigation.navigate('Info' as never)}}
                        />
                        <DrawerItem 
                        icon={(props: DrawerBarIconProps) => (
                            <Icon name={props.focused ? "settings":"settings-outline"} color={props.color} size={props.size} />
                        )}
                        label="Settings"
                        onPress={() => {}} //tbd
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={changeLanguage}>
                            <PreferenceView>
                                <Text style={{}}>Translate Russian</Text>
                                <View style={{alignItems: "center", top: -8}} pointerEvents="none">
                                    <Switch value={isRussian} />

                                </View>
                            </PreferenceView>
                        </TouchableRipple>
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.BottomDrawerSection}>
                <DrawerItem 
                icon={(props: DrawerBarIconProps) => (
                    <Icon name={props.focused ? "exit":"exit-outline"}  color={props.color} size={props.size} />
                )}
                label="Logout"
                onPress={() => {navigation.navigate('Welcome' as never);}}
                />
            </Drawer.Section>
        </DrawerView>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        user: state.userReducer.user,
    };
};

export default connect(mapStateToProps)(DrawerContent);