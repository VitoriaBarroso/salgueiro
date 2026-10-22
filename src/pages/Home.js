import React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Image, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.secaoTitulo}>Continue Lendo</Text>
        <View style={styles.continueCard}>
          <Image 
            source={require('../../assets/The Poppy War.jpg')} 
            style={styles.continueCapa}
          />
          <View style={styles.continueInfo}>
            <Text style={styles.continueLivroTitulo} numberOfLines={2}>
              Guerra da Papoula
            </Text>
            
            <View style={styles.autorContainer}>
              <View style={styles.avatarAutor} />
              <Text style={styles.continueAutor}>R.F Kuang</Text>
            </View>

            <View style={styles.progressoWrapper}>
              <View style={styles.barraFundo}>
                <View style={[styles.barraProgresso, { width: '73%' }]} />
              </View>
              <Text style={styles.porcentagemTexto}>73%</Text>
            </View>
          </View>
        </View>

        <View style={styles.headerSecao}>
          <Text style={styles.secaoTitulo}>Próximas Leituras</Text>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.carrosselHorizontal}
        >
          <View style={styles.featuredCard}>
            <Image 
              source={require('../../assets/Jogos vorazes.jpg')} 
              style={styles.featuredCapa}
            />
            <View style={styles.featuredInfo}>
              <Text style={styles.featuredTitulo} numberOfLines={2}>
                Jogos Vorazes
              </Text>
              <Text style={styles.featuredSubtitulo}>Distopia</Text>
              <Text style={styles.avaliacao}>★★★★☆ <Text style={styles.avaliacoesQtd}>(83)</Text></Text>
            </View>
          </View>

          <View style={styles.featuredCard}>
            <Image 
              source={require('../../assets/hobbit.jpg')} 
              style={styles.featuredCapa}
            />
            <View style={styles.featuredInfo}>
              <Text style={styles.featuredTitulo} numberOfLines={2}>
                Hobbit
              </Text>
              <Text style={styles.featuredSubtitulo}>Fantasia</Text>
              <Text style={styles.avaliacao}>★★★★★ <Text style={styles.avaliacoesQtd}>(124)</Text></Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.botoesContainer}>
          <TouchableOpacity 
            style={styles.botao} 
            onPress={() => navigation.navigate('Sobre')}
          >
            <Text style={styles.textoBotao}>Sobre o Salgueiro</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.botao, styles.botaoContato]} 
            onPress={() => navigation.navigate('Contato')}
          >
            <Text style={styles.textoBotao}>Contato</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.botao, styles.botaoSair]} 
            onPress={handleLogout}
          >
            <Text style={styles.textoBotao}>Sair</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F6F0',
  },
  content: {
    padding: 20,
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#332923',
    marginBottom: 12,
  },
  headerSecao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 12,
  },
  continueCard: {
    flexDirection: 'row',
    backgroundColor: '#EFE9DD',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6E0D4',
  },
  continueCapa: {
    width: 80,
    height: 110,
    borderRadius: 10,
  },
  continueInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'space-between',
  },
  continueLivroTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#332923',
    lineHeight: 20,
  },
  autorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  avatarAutor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#8C7A6B',
    marginRight: 6,
  },
  continueAutor: {
    fontSize: 13,
    color: '#6E5C4F',
  },
  progressoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barraFundo: {
    flex: 1,
    height: 6,
    backgroundColor: '#D8D0C5',
    borderRadius: 3,
    overflow: 'hidden',
    marginRight: 8,
  },
  barraProgresso: {
    height: '100%',
    backgroundColor: '#7A1C2C',
    borderRadius: 3,
  },
  porcentagemTexto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7A1C2C',
  },
  carrosselHorizontal: {
    flexDirection: 'row',
  },
  featuredCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    width: 260,
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#E6E0D4',
    alignItems: 'center',
  },
  featuredCapa: {
    width: 70,
    height: 100,
    borderRadius: 8,
  },
  featuredInfo: {
    flex: 1,
    marginLeft: 12,
  },
  featuredTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#332923',
  },
  featuredSubtitulo: {
    fontSize: 12,
    color: '#8C7A6B',
    marginTop: 2,
  },
  avaliacao: {
    fontSize: 12,
    color: '#D4A373',
    marginTop: 6,
  },
  avaliacoesQtd: {
    color: '#8C7A6B',
  },
  botoesContainer: {
    marginTop: 25,
    marginBottom: 15,
  },
  botao: {
    width: '100%',
    height: 50,
    backgroundColor: '#7A1C2C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 12,
  },
  botaoContato: {
    backgroundColor: '#4A5D4E',
  },
  botaoSair: {
    backgroundColor: '#A93226',
  },
  textoBotao: {
    color: '#F9F6F0',
    fontSize: 15,
    fontWeight: '600',
  },
});