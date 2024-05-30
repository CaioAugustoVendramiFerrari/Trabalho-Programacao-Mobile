import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Botao(props){
    return(
        <View style={[{marginTop: 33},{width: props.larguraBotao}]}>
        <Button
        fontSize={props.fonte}
          color={props.cor}
          title={props.title}
          onPress={props.mostrarMensagemBt} />
        </View>
    )
}