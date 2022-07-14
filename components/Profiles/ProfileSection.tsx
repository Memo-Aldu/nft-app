import react, { FunctionComponent } from "react";
import styled from "styled-components/native"
import { ProfileSectionProps } from "./types";
import ProfileItem from "./ProfileItem";
import { colors } from "../colors";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";

const ProfileList = styled.FlatList`
    width: 100%;
    padding-horizontal: 25px;
    padding-bottom: 15px;
    flex: 1;
`;

const ProfileBackground = styled.View`
    width: 100%;
    padding-top: 5px;
    flex: 1;
`;

const ProfileRow = styled.View`
    flex-direction: row;
    width: 100%;
`;

const ProfileSection: FunctionComponent<ProfileSectionProps> = (props, navigation) => {
    return (
            <ProfileBackground>
                <ProfileRow style={{marginBottom:15}}>
                    <RegularText textStyles={{fontSize: 19, color: colors.secondary, paddingLeft:25}}>
                        {props.sectionName}
                    </RegularText>
                </ProfileRow>

                <ProfileList
                    data={props.data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                    keyExtractor={({id}: any) => id.toString()}
                    renderItem={({item}: any) => <ProfileItem 
                        textStyles={{
                            color: colors.darkGrey,
                            fontSize: 13,
                            marginTop: 5,
                            alignSelf: "center",
                        }}  {...item} />}
                />
        </ProfileBackground>
    );
}

export default ProfileSection;