import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export default function Contato() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Canais de Atendimento</Text>
      <Text style={styles.subtituloPagina}>Envie uma carta ou mensagem para a Salgueiro</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Livraria / Editora</Text>
        <Text style={styles.valor}>Salgueiro Institucional Ltda.</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Telefone</Text>
        <Text style={styles.valor}>(11) 99999-9999</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.valor}>contato@Salgueirolivros.com</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Endereço do Refúgio</Text>
        <Text style={styles.valor}>Rua red, 100 - Vila Folklore</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F6F0',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7A1C2C',
    marginTop: 10,
  },
  subtituloPagina: {
    fontSize: 14,
    color: '#6E5C4F',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  infoBox: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E0D4',
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#8C7A6B',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  valor: {
    fontSize: 16,
    color: '#332923',
    marginTop: 4,
  },
});