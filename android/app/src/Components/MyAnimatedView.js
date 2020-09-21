/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {View, Text, PanResponder, Dimensions, Animated, StyleSheet} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {leftAction, rightAction} from '../Store/Actions'
import _ from 'lodash'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.39 * SCREEN_WIDTH;
const throtle = function(fn,d){
    let flag = false;
    return function (action){
        setTimeout(()=>{
            console.log(flag)
            flag = true
        },d) 
        if(flag){
            console.log('calling action')
            fn(action)
            flag = false
        }
    }
}

export default function Dragable () 
{
    const [pan, setPan] = useState(new Animated.ValueXY())
    
    const dispatch = useDispatch()
    const MyDelayDispatch = throtle(dispatch,1000)
    const panStyle = {
        transform: pan.getTranslateTransform()
    }
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture)=>true,
        onPanResponderMove: (evt, gesture) => {
            if(gesture.dx > SWIPE_THRESHOLD)
            {
                console.log('gestureDX right')
                MyDelayDispatch(rightAction())
            }
            if(gesture.dx < -SWIPE_THRESHOLD){
                console.log('gestureDX left')
                MyDelayDispatch(leftAction())
            }
            pan.setValue({x: gesture.dx, y: gesture.dy})
            
        },
        onPanResponderRelease: (evt, gesture)=>{
            pan.setValue({x: 0, y: 0})
        },

    })
    return (
        <Animated.View
        {...panResponder.panHandlers}
        style={[panStyle, styles.circle]}
        >
            <View>
                <Text style={{fontSize: 25}}>Card</Text>
                {/* <Text>Hello</Text> */}
            </View>
        </Animated.View>
    )

}
let CIRCLE_RADIUS = 30
const styles = StyleSheet.create({
    circle: {
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
      }
})