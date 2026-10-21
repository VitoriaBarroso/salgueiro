import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!usuario.trim()) {
      Alert.alert('Atenção', 'Informe o usuário.');
      return;
    }
    if (!senha.trim()) {
      Alert.alert('Atenção', 'Informe a senha.');
      return;
    }

    if (usuario === 'folk' && senha === '123456') {
      navigation.replace('Home');
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logoText}>Salgueiro</Text>
        <Text style={styles.subtitle}>Sua biblioteca de histórias</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuário (ex: folk)"
          placeholderTextColor="#888"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha (ex: 123456)"
          placeholderTextColor="#888"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f1ea', justifyContent: 'center', alignItems: 'center', padding: 20 },
  card: { width: '100%', maxWidth: 400, padding: 24, borderRadius: 12, elevation: 3 },
  logoText: { fontSize: 32, fontWeight: 'bold', color: '#bf4904', textAlign: 'center', marginBottom: 6 },
  subtitle: { fontSize: 16, color: '#6b7280', textAlign: 'center', marginBottom: 24 },
  input: { height: 50, borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8, paddingHorizontal: 16, marginBottom: 16, backgroundColor: '#f9fafb' },
  button: { height: 50, backgroundColor: '#3a4f41', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: 8 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});