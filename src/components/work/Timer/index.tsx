import React from 'react';
import { Text, View } from 'react-native';

import { TimerProps } from '../../../../types';
import { formatTime } from '../../../utils/date';
import S from './style';

const Timer = (props: TimerProps) => {
  const { endTime, time, isEnd } = props;

  return (
    <View style={S.timer}>
      {!isEnd && (
        <Text style={S.timer_text}>{endTime ? formatTime(endTime - time) : '15:00:00'}</Text>
      )}
    </View>
  );
};

export default Timer;
