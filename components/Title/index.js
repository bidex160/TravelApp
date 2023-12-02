import react from "react";
import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";

const Title  =({text, style}) =>{
    return (
     <Text style={[styles.title, style]}>{text} </Text>
    )
} 

Title.defaultProps = {
   text: 'Default'
}

export default React.memo(Title)