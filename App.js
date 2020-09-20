/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';
import MyCarousel from './android/app/src/Components/Carousel'
import MyButtonView from './android/app/src/Components/ButtonView'
export default function App () {
const [left, setLeft] = useState(true)
const [right, setRight] = useState(true)
      return (
        <>
          <View style={{flex:50}}>
            <MyCarousel left={left} right={right}/>
          </View>
          <View style={{flex:50}}>
            <MyButtonView setLeft={setLeft} setRight={setRight}/>
          </View>

        </>
      )
      }

