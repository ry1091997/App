import React from "react";
import {View, StyleSheet} from 'react-native';
import Colors from "../../../Constants/color";

function Card({children,style}){
    return<View style={[styles.card,style]}>{children}</View>
}


const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 4, //shadow property only for android (not for ios)
        // No options for shadow color, shadow offset, shadow opacity like iOS
    
        // these below css is used for shadow on ios (not for android)
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowRadius: 6, //how much shadow expand
        shadowOpacity: 1,
        // css ends for shadow on ios
      },
});

export default Card;
