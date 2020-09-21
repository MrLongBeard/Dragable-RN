/* eslint-disable prettier/prettier */
import Carousel from 'react-native-snap-carousel';
import React, {useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Text, View, SafeAreaView, TouchableHighlight,PanResponder, Animated, Dimensions} from 'react-native'
import MyAnimatedView from './MyAnimatedView'

export default function MyCarousel (){
    const [data, setData] = useState([{
                title:"Item 1",
                text: "Bucket List",
            },
            {
                title:"Item 2",
                text: "CardList",
            },
            {
                title:"Item 3",
                text: "Calender",
            },
            {
                title:"Item 4",
                text: "Text 4",
            }
      ])
    const [index, setIndex] = useState(0)
    const carouselRef = useRef(null)
    const [showAnimated, setShowAnimated] = useState(false)
    const left = useSelector(state=> state.left)
    const right = useSelector(state=> state.right)
    const dispatch = useDispatch()
    const view = useRef(null)
    const handleIndex=(index)=>{
        setIndex((prevIndex)=>{
            return index;
        });
    };
    useEffect(()=>{
            console.log('swiping right')
            carouselRef.current.snapToNext()
        
    },[right]);
    useEffect(()=>{
            console.log('swiping left')
            carouselRef.current.snapToPrev()
        
    },[left])
    const onPressHandle = () =>
    {
        // view.measure( (fx, fy, width, height, px, py) => {
        //     console.log('Component width is: ' + width)
        //     console.log('Component height is: ' + height)
        //     console.log('X offset to frame: ' + fx)
        //     console.log('Y offset to frame: ' + fy)
        //     console.log('X offset to page: ' + px)
        //     console.log('Y offset to page: ' + py)
        // })    
        console.log(view)    
    }
    function _renderItem({item,index}){
        
        return (
            <View 
            style={{
            backgroundColor:'floralwhite',
            borderRadius: 5,
            height: 250,
            padding: 50,
            marginLeft: 25,
            marginRight: 25, }}
            >
                {/* <TouchableHighlight
                onPressIn={()=>onPressHandle()}
                ref={view}
                style={{backgroundColor:'gray'}}
                > */}
                    {/* <View> */}
            <Text style={{fontSize: 30}}>{item.text}</Text>
                        {/* <Text>Hello</Text> */}
                    {/* </View> */}
                {/* </TouchableHighlight> */}
                {/* <MyAnimatedView left={left} right={right}/> */}
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
                firstItem={1}
                sliderWidth={300}
                itemWidth={300}
                renderItem={_renderItem}
                onSnapToItem = { index => handleIndex(index) } 
                />
                {/* {showAnimated && <MyAnimatedView />} */}
                
          </View>
        </SafeAreaView>
      );

}

