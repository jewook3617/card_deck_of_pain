import React from 'react';
import { View } from 'react-native';

import { CardsProps } from '../../../../types';
import cardSourceMap from '../../../utils/cardSourceMap';
import Card from '../Card';
import Result from '../Result';
import S from './style';

const Cards = (props: CardsProps) => {
  const { isEnd, cards, selectedCard, navigation, handlePressCard } = props;

  return (
    <View style={S.card_wrap}>
      {isEnd ? (
        <Result navigation={navigation} type={cards.length === 0 ? 'Success' : 'Fail'} />
      ) : (
        <>
          <Card source={cards.length && cardSourceMap[54]} handlePress={handlePressCard} />
          <Card source={selectedCard !== null && cardSourceMap[selectedCard]} />
        </>
      )}
    </View>
  );
};

export default Cards;
