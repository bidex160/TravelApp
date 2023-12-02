import react from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { TouchableOpacity } from "react-native-web";

const AttractionCard  = ({imageSrc, title, subTitle, onPress, style}) =>{
    return (
     <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}> {title} </Text>
      <View style={styles.row}>
         <Image style={styles.icon} source={require('../../assets/location.png')} />
          <Text style={styles.subTitle}> {subTitle} </Text>
      </View>
     </TouchableOpacity>
    )
}


// Title.defaultProps = {
//    text: 'Default'
// }

export default React.memo(AttractionCard)