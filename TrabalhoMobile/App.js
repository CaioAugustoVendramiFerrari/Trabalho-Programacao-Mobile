import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './componentes/Titulo';
import CampoTexto from './componentes/CampoTexto';
import Botao from './componentes/Botao';
import Lista from './componentes/Lista';
import { useState } from 'react';

export default function App() {
  const [peso, setPeso] = useState(0.0);
  const [altura, setAltura] = useState(0.0);
  const [lista, setLista] = useState([]);  

  function mostrarMensagem(){
    var imc = peso / (altura * altura)
    setLista([...lista, "Peso: " + peso + ", altura: " + altura + ", IMC: " + imc.toFixed(2)])
  }

  return (  
    <View style = {styles.view}>
      <Titulo corTexto = "#f12" t={30} mensagem = "Calculadora de IMC"/>

      <CampoTexto
        funcao={setPeso}
        titulo="Peso"
        sugestao='Ex 80'
        tipoTeclado='numeric'/>

      <CampoTexto 
        funcao={setAltura}
        titulo="Altura"
        sugestao='Ex 1.80'
        tipoTeclado='numeric'/>

        <Botao larguraBotao = {100} fonte = {20} cor="#33ff00" title="calcular" mostrarMensagemBt={mostrarMensagem}/>

        <Lista itens={lista}> </Lista>

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