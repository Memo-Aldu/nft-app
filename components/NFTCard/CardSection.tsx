import styled from "styled-components/native"
import { CardSectionProps } from "./types";
import CardItem from "./CardItem";
import { ScreenWidth } from "../shared";

const CardList = styled.FlatList`
    width: 100%;
    padding-left: 0px;
    padding-bottom: 15px;
    flex: 1;
`;

const CardListBackground = styled.View`
    width: 100%;
    padding-horizontal: 5px;
    padding-top: 5px;
    flex: 1;
`;

const CardSection: React.FC<CardSectionProps> = (props: CardSectionProps) => {
    return (
        <CardListBackground>
        <CardList
            data={props.data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingRight: 20,
                paddingBottom: 20,
            }}
            snapToInterval={ScreenWidth * 0.55}
            decelerationRate="fast"
            keyExtractor={({id}: any) => id.toString()}
            renderItem={({item}: any) => <CardItem {...item} />}
        />
        </CardListBackground>
    );
};

export default CardSection;