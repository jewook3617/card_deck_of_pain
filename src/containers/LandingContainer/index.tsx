import { useFonts } from '@expo-google-fonts/inter';
import React, { useState } from 'react';
import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';

import { LandingContainerProps } from '../../../types';
import DescriptionModal from '../../components/landing/DescriptionModal';
import S from './style';

const LandingContainer = (props: LandingContainerProps) => {
  const { navigation } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fontsLoaded] = useFonts({
    DotGothic16: require('../../../assets/fonts/DotGothic16-Regular.ttf'),
    'NotoSansKR-Black': require('../../../assets/fonts/NotoSansKR-Black.otf'),
    'NotoSansKR-Bold': require('../../../assets/fonts/NotoSansKR-Bold.otf'),
    'NotoSansKR-Light': require('../../../assets/fonts/NotoSansKR-Light.otf'),
    'NotoSansKR-Medium': require('../../../assets/fonts/NotoSansKR-Medium.otf'),
    'NotoSansKR-Regular': require('../../../assets/fonts/NotoSansKR-Regular.otf'),
    'NotoSansKR-Thin': require('../../../assets/fonts/NotoSansKR-Thin.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={S.container}>
      <DescriptionModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <TouchableOpacity style={S.howToIconWrap} onPress={() => setIsModalOpen(true)}>
        <Text style={S.howToIcon}>?</Text>
      </TouchableOpacity>
      <View style={S.TitleWrap}>
        {/* <Text style={S.gameTitleKo}>죽음의 카드덱</Text> */}
        <Text style={S.gameTitleEn}>Card deck</Text>
        <Text style={{ ...S.gameTitleEn, ...S.gameTitleOf }}>of</Text>
        <Text style={{ ...S.gameTitleEn, ...S.gameTitleDeath }}>Death</Text>
      </View>
      <TouchableOpacity style={S.button} onPress={() => navigation.navigate('Work')}>
        <Text style={S.buttonTextgmd}>Play Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingContainer;
