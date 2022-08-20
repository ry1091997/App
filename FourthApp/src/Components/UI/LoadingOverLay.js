import React from 'react';
import {View,ActivityIndicator,StyleSheet} from 'react-native';
import { GlobalStyles } from '../../Assets/constants/styles';


export function LoadingOverLay(){
    return <View style= {styles.container}>
        <ActivityIndicator  size='large' color='#fff'  />
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700,
    },
})