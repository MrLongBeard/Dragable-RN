/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {View, Text, PanResponder, Dimensions, Animated, StyleSheet} from 'react-native'

export default function Dragable () 
{
    const [pan, setPan] = useState(new Animated.ValueXY())
    const panStyle = {
        transform: pan.getTranslateTransform()
    }
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture)=>true,
        onPanResponderMove: (evt, gesture) => {
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