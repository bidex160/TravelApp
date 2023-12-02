import react from "react";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";

const Categories  = ({categories, selectedCatgory, onCategoryPress}) =>{
    return (
     <FlatList
     horizontal
     style={styles.flatList}
     keyExtractor={(item)=>String(item)}
     showsHorizontalScrollIndicator={false}
     data={categories} 
     renderItem={({item, index})=>{
        const selected = item == selectedCatgory 
     return <TouchableOpacity hitStop={3} style={[styles.itemContainer, index == 0 ? {marginLeft: 32}:{} ,selected? styles.selectedContainer: {}]} onPress={()=>onCategoryPress(item)} >
        <Text style={[styles.item, selected? styles.selectedItem: {}]} > {item} </Text>
     </TouchableOpacity>
     } }
     />
    )
}


// Title.defaultProps = {
//    text: 'Default'
// }

export default React.memo(Categories)