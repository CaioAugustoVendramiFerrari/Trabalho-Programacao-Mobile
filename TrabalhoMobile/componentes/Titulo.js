import React from "react";
import { StyleSheet,Text, View } from "react-native"

export default function Titulo(props){
    var ttt = props.t
    return(
        <View>
            <Text style = {[{color:props.corTexto},{fontSize:props.t}]} >{props.mensagem}</Text>
        </View>
    )
}