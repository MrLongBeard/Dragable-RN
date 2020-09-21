/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, SafeAreaView } from 'react-native';
import MyCarousel from './android/app/src/Components/Carousel'
import Dragable from './android/app/src/Components/MyAnimatedView';
import MyButtonView from './android/app/src/Components/ButtonView'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import MyReducer from './android/app/src/Store/Reducers/index'
import MyAnimatedView from './android/app/src/Components/MyAnimatedView'

const store = createStore(MyReducer)
const App = () => {
return (
        <Provider store={store}>
          <MyApp />
        </Provider>
      )
      }
function MyApp (){

const [left, setLeft] = useState(true)
const [right, setRight] = useState(true)
  return (
<>
        <View style={{flex:1}}>
          <View style={{flex:1}}>
            <View style={{flex:80}}>
              <MyCarousel left={left} right={right}/>
            </View>
            <View style={{flex:20,justifyContent:"center",alignItems:"center"}}>
              <MyAnimatedView />
            </View> 
            {/* <Dragable/> */}
          </View>
          {/* <View style={{flex:10}}>
            <MyButtonView setLeft={setLeft} setRight={setRight}/>
          </View> */}
        </View>
</>
  )
}
export default App

