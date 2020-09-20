/* eslint-disable prettier/prettier */
import Carousel from 'react-native-snap-carousel';
import React, {useState, useEffect, useRef} from 'react'
import {Text, View, SafeAreaView, PanResponder, Animated, Dimensions} from 'react-native'

export default function MyCarousel ({left, right}){
    const [data, setData] = useState([{
                title:"Item 1",
                text: "Text 1",
            },
            {
                title:"Item 2",
                text: "Text 2",
            },
            {
                title:"Item 3",
                text: "Text 3",
            },
            {
                title:"Item 4",
                text: "Text 4",
            },
            {
                title:"Item 5",
                text: "Text 5",
            },
      ])
    const [index, setIndex] = useState(0)
    const carouselRef = useRef(null)
   
    
    const handleIndex=(index)=>{
        setIndex((prevIndex)=>{
            return index
        })
    }
    useEffect(()=>{
        carouselRef.current.snapToNext()
    },[right])
    useEffect(()=>{
        carouselRef.current.snapToPrev()
    },[left])
    
    function _renderItem({item,index}){
        return (
            <View style={{
                backgroundColor:'floralwhite',
                borderRadius: 5,
                height: 250,
                padding: 50,
                marginLeft: 25,
                marginRight: 25, }}>
              <Text style={{fontSize: 30}}>{item.title}</Text>
              <Text>{item.text}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
          <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
              <Carousel
                layout={"default"}
                ref={carouselRef}
                data={data}
                sliderWidth={300}
                itemWidth={300}
                renderItem={_renderItem}
                onSnapToItem = { index => handleIndex(index) } 
                />
          </View>
        </SafeAreaView>
      );

}

