/* eslint-disable prettier/prettier */
import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
export default function MyButtonView({setLeft, setRight}){

const handleLeft=()=>{
    setLeft(prevVal=>!prevVal)
}
const handleRight=()=>{
    setRight(prevVal=>!prevVal)
}
const right = useSelector(state => state.right);
const left = useSelector(state => state.left);
    return (
        <>
            <View style={{flex:1, flexDirection:'row'}}>
                <View style={{flex:50}}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={()=> handleLeft()}
                    >
                        <Text>Left 
                            {left}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:50}}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={()=>handleRight()}
                    >
                        <Text>Right 
                            {right}
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </>
    )
}

const style = StyleSheet.create({

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
})