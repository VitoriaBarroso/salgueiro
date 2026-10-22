import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Alert, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleLogin = () => {
    if (!usuario.trim()) {
      Alert.alert('Salgueiro', 'Informe o usuário para entrar na Salgueiro.');
      return;
    }
    if (!senha.trim()) {
      Alert.alert('Salgueiro', 'Informe a senha. ex: 123456');
      return;
    }

    if (usuario === 'folk' && senha === '123456') {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Salgueiro</Text>
      <Text style={styles.legenda}>Seu refúgio de leitura</Text>

      <View style={styles.cardForm}>
        <TextInput
          style={styles.input}
          placeholder="Usuário ex: folk"
          placeholderTextColor="#A39B8B"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />

        <View style={styles.senhaContainer}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha ex: 123456"
            placeholderTextColor="#A39B8B"
            secureTextEntry={!mostrarSenha}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity 
            style={styles.botaoOlho} 
            onPress={() => setMostrarSenha(!mostrarSenha)}
          >
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F6F0',
    padding: 24,
  },
  titulo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#7A1C2C',
    letterSpacing: 4,
  },
  legenda: {
    fontSize: 15,
    color: '#5A4A42',
    marginBottom: 35,
  },
  cardForm: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6E0D4',
    elevation: 2,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F9F6F0',
    borderWidth: 1,
    borderColor: '#D8D0C5',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#332923',
  },
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#F9F6F0',
    borderWidth: 1,
    borderColor: '#D8D0C5',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  inputSenha: {
    flex: 1,
    fontSize: 16,
    color: '#332923',
  },
  botaoOlho: {
    padding: 5,
  },
  textoOlho: {
    fontSize: 18,
  },
  botao: {
    width: '100%',
    height: 50,
    backgroundColor: '#7A1C2C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 5,
  },
  textoBotao: {
    color: '#F9F6F0',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});