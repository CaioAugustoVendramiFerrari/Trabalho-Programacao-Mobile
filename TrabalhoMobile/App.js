import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './componentes/Titulo';

export default function App() {
  return (
    <View style = {styles.container}>
      {/* <Text>teste</Text> */}
      <Titulo corTexto = "#f12" tamanhoFonte = "3em" mensagem = "Calculadora de IMC"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
});
