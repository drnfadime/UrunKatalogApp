import React, { createContext, useState, useContext } from 'react';

// Ortak hafıza kutusunu oluşturuyoruz
const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Ürünü favorilere ekleyen fonksiyon
  const addToFavorites = (product) => {
    // Eğer ürün zaten favorilerde yoksa ekle (Çift kayıt olmasın diye)
    const isExist = favorites.find(item => item.id === product.id);
    if (!isExist) {
      setFavorites((prev) => [...prev, product]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Diğer dosyalardan bu hafızaya erişmek için kullanacağımız "anahtar"
export const useFavorites = () => useContext(FavoritesContext);