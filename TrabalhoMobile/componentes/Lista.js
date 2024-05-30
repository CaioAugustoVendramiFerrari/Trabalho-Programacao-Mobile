import React from  "react";
import { View, Text, FlatList } from "react-native";

function MostarLista(item){
    return ( 
        <View style={[{marginTop: 33}]}>
      <Text >{item}</Text>
      </View>
    )
}
  
export default function Lista(props){
  console.log(props.itens);
  return (
      <FlatList data={ props.itens }
        renderItem={({item}) => MostarLista(item)}
      />
  )
}