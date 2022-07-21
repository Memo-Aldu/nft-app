import React, {useEffect } from 'react';
import styled from 'styled-components/native';

import { colors } from '../colors';
import { Ionicons } from '@expo/vector-icons';
import { connect, useDispatch, useSelector } from "react-redux";
import { AppState, DispatchType } from '../../store/type.d';
import ProfileIcon from '../Header/ProfileIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Comments } from '../NFTCard/types';
import CommentItem from './CommentItem';
import { setComments } from '../../store/actionCreators';
import Toast from 'react-native-root-toast';

const ProfileImageView = styled.View`
    height: 35px;
    width: 100%;
    padding-horizontal: 20px;
    background-color: transparent;
    shadow-color: ${colors.darkGrey};
    shadow-radius: 10px; 
    shadow-opacity: 0.2;
    flex-direction: row;
`;

const CartBackground = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 70px;
`;

const TextInput = styled.TextInput`
    background-color: ${colors.grey};
    flex: 1;
    border-radius: 4px;
    padding-horizontal: 10px;
    margin-horizontal: 10px;
`;

const CommentListView = styled.FlatList`

`;



const CommentSection: React.FC = () => {

    const user = useSelector((state: AppState) => state.userReducer.user);
    const modal = useSelector((state: AppState) => state.modalReducer);
    const [comment, setComment] = React.useState('');
    const [commentNFT, setCommentsNFT] = React.useState<Comments[]>(modal.data.nft!.data.comments);
    const dispatch: DispatchType = useDispatch();

    useEffect(() => {
        setCommentsNFT(modal.data.nft!.data.comments);
    },[]);

    const handleCommentSent = () => {
        if(comment.length == 0) {
            Toast.show('Please enter a comment');
            return;

        }
        const newComment: Comments = {
            id: Math.random(),
            text: comment,
            author: {
                id: user.id,
                name: user.firstName + " " + user.lastName,
                pfp: user.avatar,
            }
        }
        commentNFT.push(newComment);
        dispatch(setComments(modal.data!));
        setComment('')
    }
    return ( 
        <CartBackground>
            <CommentListView
            data={commentNFT}
            keyExtractor={({id}: any) => id.toString()}
            renderItem={({item}: any) => <CommentItem {...item}/>}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            />
            <ProfileImageView>
                    <ProfileIcon
                                imgStyle={{height:35, width: 35, borderRadius:15, borderWidth:1, borderColor: colors.white}}
                                img={user.avatar}
                                imgContainerStyle={{
                                    backgroundColor: colors.tertiary,
                                    height: 35, width: 35, alignItems: "center", justifyContent: "center",
                                    borderRadius:20
                                }}
                                onPress={() => {}}
                            />
                            <TextInput
                            value={comment}
                            onChangeText={setComment}/>
                            <TouchableOpacity onPress={() => handleCommentSent()}>
                                <Ionicons name="arrow-up-circle" size={34} color={colors.orange}/>
                            </TouchableOpacity>
            </ProfileImageView>
        </CartBackground>
    ); 
}

const mapStateToProps = (state: AppState) => {
    return {
        user: state.userReducer.user,
        modal: state.modalReducer
    };
}

export default connect()(CommentSection);