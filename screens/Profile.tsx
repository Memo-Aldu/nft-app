import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container } from "../components/shared";


const ProfileContainer = styled(Container)`
    background-color: ${colors.lightGrey};
    width: 100%;
    flex: 1;
`;

const Profile: FunctionComponent = () => {
    return (
        <ProfileContainer>
            
        </ProfileContainer>
    );
};

export default Profile;