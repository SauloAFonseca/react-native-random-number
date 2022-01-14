import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {

  const [numero, setNumero] = useState(0);
  
  function handleNumero(){
    const novoNumero = Math.floor(Math.random() * 10000);
    setNumero(novoNumero)
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text style={style.textoBotao}>Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#900C3F',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numero: {
    color: '#ffffff',
    fontSize: 80,
    fontWeight: 'bold' 
  },
  botao: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: '60%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  textoBotao: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold'
  }

});
export default App;