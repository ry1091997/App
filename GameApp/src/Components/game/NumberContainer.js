import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import Colors from "../../../Constants/color";
import Family from "../../../Constants/fontFamily";

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.accent500,
        borderRadius:24,
        padding:8,
        margin:24,
        alignItems:'center'
    },
    numberText:{
        fontFamily:Family.sansBold,
        color:Colors.accent500,
        fontSize:36,
    }
})

export default NumberContainer;