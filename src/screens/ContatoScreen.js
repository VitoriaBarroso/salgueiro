import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function ContatoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.textBold}>Salgueiro Editora & Livros[cite: 7]</Text>
      <Text style={styles.text}>Telefone: (11) 98888-8888[cite: 7]</Text>
      <Text style={styles.text}>E-mail: contato@salgueirolivros.com[cite: 7]</Text>
      <Text style={styles.text}>Endereço: Rua dos Poetas, 1989[cite: 7]</Text>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.goBack()}>
        <Text style={styles.secondaryButtonText}>Voltar para a Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f1ea', padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2b2b2b', marginBottom: 16, textAlign: 'center' },
  textBold: { fontSize: 16, fontWeight: 'bold', color: '#3a4f41', marginBottom: 8, textAlign: 'center' },
  text: { fontSize: 15, color: '#4b5563', marginBottom: 8, textAlign: 'center' },
  secondaryButton: { width: '100%', maxWidth: 320, height: 48, borderWidth: 1, borderColor: '#3a4f41', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: 20 },
  secondaryButtonText: { color: '#3a4f41', fontSize: 16, fontWeight: '600' }
});