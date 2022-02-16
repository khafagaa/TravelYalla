import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const RestaurantList = ({data, navigation}) => {
  const {width} = Dimensions.get('window');
  const {height} = Dimensions.get('window');
  return (
    <View style={{width: '100%'}}>
      <FlatList
        data={data}
        renderItem={(products): any => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                height: height / 6,
                width: width / 1,
                borderRadius: 20,
                marginTop: 20,
                elevation: 0.1,
                backgroundColor: 'white',
              }}
              key={products.index}
              onPress={() =>
                navigation.navigate('Details', {products: products.item})
              }>
              <Image
                style={{
                  width: width / 3,
                  resizeMode: 'stretch',
                }}
                source={{
                  uri: products.item?.logo,
                }}
              />
              <View style={{flexDirection: 'column', padding: 20}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '400',
                    marginBottom: 10,
                    color: 'black',
                  }}>
                  {products.item?.name}
                </Text>
                <View style={{flex: 1, flexWrap: 'wrap'}}>
                  {products.item?.items?.map(val => (
                    <View key={val.Image}>
                      <Text
                        style={{fontSize: 12, flexWrap: 'wrap', flexShrink: 1}}>
                        {`${val.name}, `}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default RestaurantList;
