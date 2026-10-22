import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Salgueiro Livros </Text>
        <Text style={styles.descricao}>
          A Salgueiro nasceu da paixão por histórias aconchegantes, chá quente e páginas amareladas pelo tempo.
        </Text>

        <Text style={styles.subtitulo}>Missão</Text>
        <Text style={styles.texto}>Proporcionar um refúgio digital de paz e leitura para mentes sonhadoras.</Text>

        <Text style={styles.subtitulo}>Visão</Text>
        <Text style={styles.texto}>Conectar leitores a histórias que parecem canções num dia frio de Outono.</Text>

        <Text style={styles.subtitulo}>Valores</Text>
        <Text style={styles.texto}>Estética poética, amor à literatura, tranquilidade e simplicidade.</Text>

        <View style={styles.divisor} />
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
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6E0D4',
    marginBottom: 30,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7A1C2C',
    marginBottom: 12,
  },
  descricao: {
    fontSize: 15,
    color: '#4A3E37',
    lineHeight: 22,
    marginBottom: 15,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A5D4E',
    marginTop: 12,
    marginBottom: 4,
  },
  texto: {
    fontSize: 14,
    color: '#5A4A42',
    lineHeight: 20,
  },
  divisor: {
    height: 1,
    backgroundColor: '#E6E0D4',
    marginVertical: 20,
  },
  versao: {
    fontSize: 13,
    color: '#8C7A6B',
    fontStyle: 'italic',
  },
  versaoNumero: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#7A1C2C',
    marginTop: 4,
  },
});