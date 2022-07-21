import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container, ScreenWidth, ScreenHeight } from "../components/shared";
import { StatusBar, SafeAreaView, ImageBackground } from "react-native";
import CollectionCardSection from "../components/NFTCard/CollectionCardSection";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import RegularText from "../components/texts/RegularText";
import SmallText from "../components/texts/SmallText";
import RegularButton from "../components/buttons/RegularButton";
import ProfileIcon from "../components/Header/ProfileIcon";
import {AppState} from "../store/type.d";


import { connect, useSelector } from "react-redux";


const ProfileContainer = styled(Container)`
    background-color: ${colors.lightGrey};
    width: 100%;
`;

const ProfileImageView = styled.View`
    position: relative;
    height: ${ScreenHeight * 0.30}px;
    width: 95%;
    background-color: transparent;
    shadow-color: ${colors.darkGrey};
    shadow-radius: 10px; 
    shadow-opacity: 0.2;
    elevation: 10;
    align-items: center;
    


`;
const ProfileImageBackground = styled(ImageBackground)`
    position: relative;
    height: 100%;
    width: 100%;
`;

const RowView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding : 20px;
`;

const BackNavView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
`;

const TextView = styled.View`
    padding-horizontal: 20px;
    padding-vertical: 15px;
    z-index: 1;
    width: 100%;
    align-items: center;
    justify-content: center;

`;

const CollectionView = styled.View`
    width: 100%;
    height: 100%;
    align-self: center;
    padding-left: 20px;
    flex: 1;
`;


const Profile: FunctionComponent = () => {
    const navigation = useNavigation();
    const user = useSelector((state: AppState) => state.userReducer.user);
    const [collection, setCollection] = React.useState(user.collections);
    const [collectionIsOpen, setcollectionIsOpen] = React.useState(true);
    const [likesIsOpen, setLikesIsOpen] = React.useState(false);
    return (
        <ProfileContainer>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="dark-content"/>
                <BackNavView>
                    <Ionicons style={{paddingTop:10}} onPress={navigation.goBack} name="chevron-back-outline" size={30} color={colors.black} />
                </BackNavView>
                <ProfileImageView style={{shadowOffset: {height: 10, width: 0}}}>
                <ProfileImageBackground source={user.backgroundImage} imageStyle={{borderRadius: 25}}/>
                    <ProfileIcon
                                imgStyle={{height:150, width: 150, borderRadius:100, borderWidth:5, borderColor: colors.white}}
                                img={user.avatar}
                                imgContainerStyle={{
                                    backgroundColor: colors.tertiary,
                                    height: 150, width: 150, alignItems: "center", justifyContent: "center",
                                    borderRadius:100, top:-90
                                }}
                                onPress={() => {}}
                            />
                </ProfileImageView>
                <RowView style={{width: "100%", top: 30}}>
                    <TextView>
                    <RegularText textStyles={{fontSize: 24, color: colors.orange, fontWeight:"bold"}}>
                            {user.firstName} {user.lastName}
                        </RegularText>
                        <RegularText textStyles={{fontSize: 15, color: colors.black, fontWeight:'normal', paddingTop:10}}>
                            {user.hobby}
                        </RegularText>
                    </TextView>
                </RowView>
                <RowView style={{justifyContent: "space-evenly", width: "100%", top: 0}}>
                    <RegularButton onPress={() => {setCollection(user.collections as never); setcollectionIsOpen(true); setLikesIsOpen(false)}} 
                        textStyles={{fontSize: 15, fontWeight: 'bold'}} 
                        btnStyles={{width:150, height:40, justifyContent: 'center', 
                        borderRadius: 8, padding: 0, backgroundColor: collectionIsOpen? colors.primary : colors.orange}}>
                        <Ionicons name="apps-outline" size={15} color={colors.white}
                            style={{position: "relative", zIndex: 1}}/> Collected
                    </RegularButton>
                    <RegularButton onPress={() => {setCollection(user.likedNfts as never); setcollectionIsOpen(false); setLikesIsOpen(true)}} 
                        textStyles={{fontSize: 15, fontWeight: 'bold'}} 
                        btnStyles={{width:150, height:40, justifyContent: 'center', 
                        borderRadius: 8, padding: 0, backgroundColor: likesIsOpen? colors.primary : colors.orange}}>
                        <Ionicons name="heart-outline" size={15} color={colors.white}
                            style={{position: "relative", zIndex: 1}}/> Favorites
                    </RegularButton>
                </RowView>
                <CollectionView>
                    <CollectionCardSection data={collection} />
                </CollectionView>
        </ProfileContainer>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(Profile);