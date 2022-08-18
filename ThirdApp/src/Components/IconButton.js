import React from "react";
import { Pressable,Image, StyleSheet } from "react-native";

function IconButton({onPress,check,imageToggle}){
    // console.log('ImageToggle',imageToggle)
    var icon = check? require('../Assets/images/list.png'):imageToggle?require('../Assets/images/star.png'):require('../Assets/images/outline_star_white_24.png');

    return <Pressable onPress={onPress} style = {({pressed})=>pressed && styles.pressed}><Image source={icon} /></Pressable>
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7,
    }
})

export default IconButton;