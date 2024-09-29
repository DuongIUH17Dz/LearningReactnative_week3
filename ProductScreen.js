import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sản phẩm điện thoại</Text>
      <Image
        source={{ uri: 'https://example.com/image.jpg' }}
        style={styles.image}
      />
      <Text>Mô tả sản phẩm: Điện thoại XYZ với tính năng vượt trội.</Text>
      <Text>Giá: 10,000,000 VNĐ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
});

export default ProductScreen;
