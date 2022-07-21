import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container, ScreenHeight } from "../components/shared";
import { StatusBar, ImageBackground } from "react-native";
import CollectionCardSection from "../components/NFTCard/CollectionCardSection";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import RegularText from "../components/texts/RegularText";
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

interface CollectionScreenProps {
    route: any;
    navigation: any;
    children: any;
}


const Collection: FunctionComponent<CollectionScreenProps> = (props: CollectionScreenProps) => {
    const {nftCollection}: any = props.route.params;
    const navigation = useNavigation();

    return (
        <ProfileContainer>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="dark-content"/>
                <BackNavView>
                    <Ionicons style={{paddingTop:10}} onPress={navigation.goBack} name="chevron-back-outline" size={30} color={colors.black} />
                </BackNavView>
                <ProfileImageView style={{shadowOffset: {height: 10, width: 0}}}>
                <ProfileImageBackground source={nftCollection.collection[Math.floor(Math.random() * nftCollection.collection.length)].image} 
                imageStyle={{borderRadius: 25}}/>
                    <ProfileIcon
                                imgStyle={{height:150, width: 150, borderRadius:100, borderWidth:5, borderColor: colors.white}}
                                img={nftCollection.pfp}
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
                            {nftCollection.name}
                        </RegularText>
                    </TextView>
                </RowView>
                <CollectionView>
                    <CollectionCardSection data={nftCollection.collection} />
                </CollectionView>
        </ProfileContainer>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(Collection);