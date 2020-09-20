import React, {useState} from 'react'
import {View, Text, PanResponder, Dimensions, Animated, StyleSheet} from 'react-native'

export default function Dragable () 
{
    const [pan, setPan] = useState(new Animated.ValueXY())
    const val = {x:0,y:0}
    pan.addListener((value)=>val={value})
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture)=>true,
        // onPanResponderMove: 
        
    })

}