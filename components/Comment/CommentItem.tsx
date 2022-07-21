import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import RegularText from '../texts/RegularText';
import { colors } from '../colors';
import { Comments } from '../NFTCard/types';
import ProfileIcon from '../Header/ProfileIcon';

const CommentView = styled.View`
    padding: 20px;
    flex-direction: row;
    flex: 1;
`;

const CommentTextView = styled.View`
    margin-horizontal: 14px;

`;



const CommentItem: React.FC<Comments> = (comment) => {
    return (
        <CommentView>
            <ProfileIcon
                    imgStyle={{height:40, width: 40, borderRadius:40, borderWidth:1, borderColor: colors.white}}
                    img={comment.author.pfp}
                    imgContainerStyle={{
                        backgroundColor: colors.tertiary,
                        height: 40, width: 40, alignItems: "center", justifyContent: "center",
                        borderRadius:20
                    }}
                    onPress={() => {}}
            />
            <CommentTextView>
                <RegularText textStyles={{fontSize: 13, color: 'gray'}}>
                    {comment.author.name}
                </RegularText>
                <RegularText textStyles={{fontSize: 15, color: colors.darkGrey}}>
                    {comment.text}
                </RegularText>
            </CommentTextView>

        </CommentView>
    );
}

export default CommentItem;