import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredData(data);
      });
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = products.filter(item => 
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { urunDetay: item })}
    >
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.price}>{item.price} $</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.favBtn} 
        onPress={() => navigation.navigate('Favorites')}
      >
        <Text style={styles.favBtnText}>⭐ Favorilere Git</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.searchInput}
        placeholder="Ürün Ara..."
        value={search}
        onChangeText={handleSearch}
      />
      
      {products.length === 0 ? (
        <ActivityIndicator size="large" color="#34495e" />
      ) : (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  favBtn: { backgroundColor: '#34495e', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 15 },
  favBtnText: { color: '#fff', fontWeight: 'bold' },
  searchInput: { height: 45, borderWidth: 1, borderColor: '#ddd', paddingLeft: 15, marginBottom: 20, borderRadius: 10, backgroundColor: '#fff' },
  card: { padding: 20, backgroundColor: '#fff', marginBottom: 10, borderRadius: 10, elevation: 2 },
  title: { fontSize: 16, fontWeight: 'bold' },
  price: { color: '#27ae60', marginTop: 5, fontWeight: 'bold' }
});

export default HomeScreen;