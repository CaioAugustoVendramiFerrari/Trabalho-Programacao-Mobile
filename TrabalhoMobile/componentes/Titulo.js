import React from "react";
import { StyleSheet,Text, View } from "react-native"

export default function Titulo(props){
    corTexto = props.cor
    tamanhoFonte = props.fonte
    return(
        <View>
            <Text style = {[{color:props.corTexto},{fontSize:props.tamanhoFonte}]} >{props.mensagem}</Text>
        </View>
    )
}