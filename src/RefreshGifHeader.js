'use strict';
import React, { useRef, useCallback, useState } from 'react';
import { StyleSheet, Animated, Image } from 'react-native';
import { SmartRefresh, SmartRefreshHeader } from '../index';

function RefreshGifHeader(props) {
    const { refreshing, onRefresh = () => {}, source = '', containerStyle, imageStyle } = props;

  const onRefreshCallBack = useCallback(
      () => {
        //do nothing with displayed gif image
        onRefresh();
      },
      [onRefresh],
  );


  let [currentState,setCurrentState] = useState(0);
  const onChangeStateCallBack = useCallback((event) => {
    const { state } = event.nativeEvent;
    setCurrentState(state);
    switch (state) {
      case 0:
        //do nothing with displayed gif image
        break;
      case 2:
        onRefreshCallBack();
        break;
      default:

    }
  }, [onRefreshCallBack]);


    return (
        <SmartRefresh
            refreshing={refreshing}
            onChangeState={onChangeStateCallBack}
        >
            <SmartRefreshHeader style={[styles.container, { ...containerStyle }]}>
                <Image style={[styles.lottery, { ...imageStyle }]} resizeMode={'contain'} source={source} />
            </SmartRefreshHeader>
            {props.children}
        </SmartRefresh>
    );
}

const styles = StyleSheet.create({
    container: {
        // height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottery: {
        height: 80,
    },
});

export default React.memo(RefreshGifHeader);
