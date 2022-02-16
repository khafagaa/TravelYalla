import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const TageCard = ({data}) => {
  const {width} = Dimensions.get('window');
  const {height} = Dimensions.get('window');
  return (
    <View style={{flexGrow: 1, width: '100%'}}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(restaurantTags): any => {
          return (
            <>
              {restaurantTags.item.map(index => (
                <TouchableOpacity key={index.id} onPress={() => {}}>
                  <Image
                    style={{
                      width: width / 2.5,
                      height: height / 10,
                      resizeMode: 'stretch',
                      marginLeft: 10,
                    }}
                    source={{
                      uri: index.image,
                    }}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: '500',
                      color: 'black',
                    }}>
                    {index.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </>
          );
        }}
      />
    </View>
  );
};

export default TageCard;
