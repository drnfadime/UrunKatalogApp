import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFavorites } from './FavoritesContext';

const FavoritesScreen = () => {
  // Hafızadaki favori listesini çekip alıyorum
  const { favorites } = useFavorites();

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.emptyText}>Henüz favori ürününüz yok. 🧐</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price} $</Text>
              </View>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 16, color: '#888', fontWeight: '500' },
  card: { 
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 12, 
    marginBottom: 10, 
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#f1c40f' // Favori olduğunu belirten sarı şerit
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  price: { color: '#27ae60', marginTop: 5, fontWeight: 'bold' }
});

export default FavoritesScreen;