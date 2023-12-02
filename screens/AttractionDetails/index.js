import { FlatList, Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import styles from "./style";
import React, { useEffect, useState } from "react";


const ALL = 'All'
const AttractionDetails  = ({route, navigation}) =>{
    const {item} = route?.params || {}
    console.log(item)
    const onBack = () =>{
       navigation.goBack()
    }
    // const [selectedCatgory, setSelectedCatgory] = useState('All')
    // const [data, setData] = useState([])

  
    return (
       <SafeAreaView style={styles.safeArea}>   
       <ImageBackground style={styles.mainImage} imageStyle={{borderRadius: 20}} source={{uri: item.images[0]}} >
        <View style={styles.header}>
              <Image  onPress={onBack} style={styles.icon} source={require('./../../assets/back.png')} /> 
              <Image style={styles.icon} source={require('./../../assets/share.png')} /> 
        </View>
        <View style={styles.footer}></View>
         <ImageBackground style={styles.gallery} imageStyle={{borderRadius: 15}} source={require('./../../assets/galleryBG.png')}></ImageBackground>
       </ImageBackground>
          <Text>{item.name}</Text>   
       </SafeAreaView>
    )
} 

export default React.memo(AttractionDetails)