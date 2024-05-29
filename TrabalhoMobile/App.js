import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './componentes/Titulo';
import CampoTexto from './componentes/CampoTexto';
import Botao from './componentes/Botao';
import { useState } from 'react';

export default function App() {
  const [peso, setPeso] = useState(0.0);
  const [altura, setAltura] = useState(0.0);
  const [mensagem, setMensagem] = useState("")  

  function mostrarMensagem(){
    var imc = peso / (altura * altura )
    setMensagem( "Peso: " + peso + "\nAltura: " + altura + "\nIMC: " + imc.toFixed(2) )
  }

  return (  
    <View style = {styles.view}>
      <Titulo corTexto = "#f12" t={30} mensagem = "Calculadora de IMC"/>

      <CampoTexto
        funcao={setPeso}
        titulo="Peso"
        sugestao='Ex 75.3'
        tipoTeclado='numeric'/>
      <CampoTexto
        funcao={setAltura}
        titulo="Altura"
        sugestao='Ex 1.85'
        tipoTeclado='numeric'/>
        <Botao cor="#ece" titulo="calcular"/>
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    width:'100%',
    marginTop: '10%',
    flex:1,
    alignItems: 'center'
  }
})