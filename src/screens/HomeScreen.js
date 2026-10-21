import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  SafeAreaView, ScrollView, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTag}>Leitura Atual</Text>
            <Text style={styles.cardCount}>1 livro</Text>
          </View>
          <View style={styles.bookRow}>
            <Image 
              source={require('../../assets/The Poppy War.jpg')} 
              style={styles.bookCoverImage}
              resizeMode="cover"
            />
            
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>Guerra da Papoula</Text>
              <Text style={styles.bookAuthor}>História Chinesa R.F Kuang</Text>
              <Text style={styles.bookProgress}>Página 128 de 680</Text>
            </View>
          </View>
        </View>

        {}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Quero Ler</Text>
            <Text style={styles.cardCount}>3 livros</Text>
          </View>
          <Text style={styles.cardSubtitle}>Livros à espera na sua mesa de cabeceira.</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
            <View style={styles.bookCoverMini}><Text style={styles.miniText}></Text>
             <Image 
              source={require('../../assets/The Poppy War.jpg')} 
              style={styles.bookCoverImage}
              resizeMode="cover"
            />
            </View>
            
            <View style={styles.bookCoverMini}><Text style={styles.miniText}></Text>
            <Image 
              source={require('../../assets/Jogos vorazes.jpg')} 
              style={styles.bookCoverImage}
              resizeMode="cover"
            />
            </View>

            <View style={styles.bookCoverMini}><Text style={styles.miniText}>Seven</Text>
             <Image 
              source={require('../../assets/hobbit.jpg')} 
              style={styles.bookCoverImage}
              resizeMode="cover"
            />
            </View>
           
          </ScrollView>
        </View>

        {}
        <View style={styles.navigationBox}>
          <TouchableOpacity 
            style={styles.navButton} 
            onPress={() => navigation.navigate('Sobre')}
          >
            <Text style={styles.navButtonText}>Sobre o Aplicativo</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.navButton} 
            onPress={() => navigation.navigate('Contato')}
          >
            <Text style={styles.navButtonText}>Entre em Contato</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.navButton} 
            onPress={() => navigation.navigate('Sair')}
          >
            <Text style={styles.navButtonText}>Sair</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f1ea',
  },
  scrollContent: {
    padding: 16,
  },
  
  card: {
    backgroundColor: '#f5f4f0',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTag: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#3a4f41',
    letterSpacing: 0.8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d3b32',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#777',
    marginBottom: 12,
  },
  cardCount: {
    fontSize: 13,
    color: '#888',
    fontWeight: '500',
  },
  bookRow: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  bookCoverImage: {
    width: 65,
    height: 95,
    borderRadius: 8,
    backgroundColor: '#ccc', 
  },
  bookCoverMain: {
    width: 60,
    height: 85,
    backgroundColor: '#3a4f41',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  bookCoverText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookInfo: {
    marginLeft: 14,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d3b32',
  },
  bookAuthor: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  bookProgress: {
    fontSize: 12,
    color: '#3a4f41',
    marginTop: 6,
    fontWeight: '500',
  },
  horizontalList: {
    flexDirection: 'row',
    marginTop: 6,
  },
  bookCoverMini: {
    width: 65,
    height: 90,
    backgroundColor: '#2d3b32',
    borderRadius: 8,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  finishedCover: {
    backgroundColor: '#5a6b5e',
  },
  miniText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navigationBox: {
    marginTop: 10,
    marginBottom: 20,
    gap: 10,
  },
  navButton: {
    backgroundColor: '#bdbf8a',
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});