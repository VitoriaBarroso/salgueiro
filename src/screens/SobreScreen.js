import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function SobreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sobre o Salgueiro</Text>
      <Text style={styles.textBold}>Nome da aplicação: Salgueiro - Livros </Text>
      <Text style={styles.text}>Versão: 1.0</Text>
      <Text style={styles.text}>Empresa Fictícia: Salgueiro Literary Club</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Visão</Text>
        <Text style={styles.textDescription}>
          Esta aplicação foi desenvolvida como projeto acadêmico para a disciplina de Programação para Dispositivos Móveis I. Nosso objetivo é criar um refúgio literário inspirado na estética rústica e acolhedora do álbum folklore da Taylor Swift.
        </Text>
      </View>

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
  infoBox: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginTop: 12, marginBottom: 24, width: '100%', maxWidth: 320, elevation: 2 },
  infoTitle: { fontSize: 15, fontWeight: 'bold', color: '#2b2b2b', marginBottom: 6, textAlign: 'center' },
  textDescription: { fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 20 },
  secondaryButton: { width: '100%', maxWidth: 320, height: 48, borderWidth: 1, borderColor: '#3a4f41', justifyContent: 'center', alignItems: 'center', borderRadius: 8 },
  secondaryButtonText: { color: '#3a4f41', fontSize: 16, fontWeight: '600' }
});