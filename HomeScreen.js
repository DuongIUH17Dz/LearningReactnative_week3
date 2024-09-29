import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chào mừng đến với cửa hàng điện thoại!</Text>
      <Button
        title="Xem sản phẩm"
        onPress={() => navigation.navigate('Product')}
      />
    </View>
  );
};

export default HomeScreen;
