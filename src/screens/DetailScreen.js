import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useFavorites } from './FavoritesContext'; 

const DetailScreen = ({ route }) => {
  const { urunDetay } = route.params;
  const { addToFavorites } = useFavorites();

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: urunDetay.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{urunDetay.title}</Text>
        <Text style={styles.price}>{urunDetay.price} $</Text>
        <Text style={styles.description}>{urunDetay.description}</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            addToFavorites(urunDetay);
            Alert.alert("Başarılı", "Ürün favorilere eklendi.");
          }}
        >
          <Text style={styles.buttonText}>⭐ Favorilere Ekle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 250, resizeMode: 'contain' },
  content: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
  price: { fontSize: 20, color: 'green', marginVertical: 10 },
  description: { fontSize: 16, color: '#666', lineHeight: 22 },
  button: { backgroundColor: '#f1c40f', padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});

export default DetailScreen;