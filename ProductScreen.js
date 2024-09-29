import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.nguyenkimmall.com/images/detailed/824/dien-thoai-iphone-14-pro-max-256gb-vang-3.jpg' }}
        style={styles.image}
      />
      <Text style={{ fontWeight: 'bold', fontSize: 14 }} >Smart Phone IPhone 16 -Authetication</Text>
      <View style={styles.danhgia}> 
      <Image style={{width:130,height:20, marginLeft:0}} source={require('./assets/danhgia.PNG')}

      />
      <Text style={{ fontWeight: 'bold', fontSize: 14, marginLeft:10}}>(Watch 828 reviews)</Text>

      </View>
      <Text>Giá: 10,000,000 VNĐ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center"

    
  },
  danhgia:{
    flexDirection:'row',
    alignItems:"center",

  },
  image: {
    marginTop:5,
    width: 300,
    height: 370,
    
  },
});

export default ProductScreen;
