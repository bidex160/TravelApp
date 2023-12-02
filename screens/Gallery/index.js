import react from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import styles from "./style";
import React, { useEffect, useState } from "react";

const ALL = 'All'
const Gallery  = () =>{
    const [selectedCatgory, setSelectedCatgory] = useState('All')
    const [data, setData] = useState([])

    return (
       <SafeAreaView style={styles.safeArea}>
        <Text>Gallery</Text>
       </SafeAreaView>
    )
} 

export default React.memo(Gallery)