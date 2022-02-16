import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Entypo, EvilIcons, FontAwesome5, Ionicons} from '../Components/Icons';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Details = ({route, navigation}) => {
  //* variable Declaratoin

  const {products} = route.params;
  // console.log(`pro is ${JSON.stringify(products)}`);
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: products.tags[0].image,
        }}
        style={styles.bgImage}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="md-chevron-back"
            size={40}
            color="white"
            style={{marginLeft: 5}}
            onPress={() => navigation.goBack()}
          />
          <FontAwesome5
            name="share"
            size={30}
            color="white"
            style={{
              marginRight: 15,
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={styles.branchicon}>
          <Ionicons
            name="ios-location"
            size={30}
            color="red"
            style={{
              alignSelf: 'center',
            }}
          />
          <Text style={styles.txt}>Branches</Text>
        </View>
      </ImageBackground>
      <View style={styles.resDet} key={products.index}>
        <Image
          resizeMode="center"
          style={{
            width: width / 3,
            backgroundColor: '#fff',
          }}
          source={{
            uri: products.logo,
          }}
        />
        <View style={styles.containertxt}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              marginBottom: 10,
              color: 'black',
            }}>
            {products.name}
          </Text>
          <View style={styles.containerStyle}>
            {products.items?.map((val, indx: number) => (
              <View key={indx}>
                <Text style={styles.listTxt}>{`${val.name}, `}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          marginTop: 10,
          flex: 1,
          backgroundColor: 'white',
          width: width - 10,
        }}>
        {products.items?.map((val: any, index: number) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              justifyContent: 'space-evenly',
              margin: 10,
              borderRadius: 20,
              height: 150,
              elevation: 15,
              shadowColor: '#757575',
              flex: 1,
            }}>
            <View
              style={{
                marginLeft: 10,
                flexDirection: 'column',
                marginTop: 30,
                flexWrap: 'wrap',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  color: 'black',
                }}>
                {val.name}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '400',
                  color: 'black',
                }}>
                {val.description}{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '900',
                  color: 'green',
                }}>
                {val.price}
              </Text>
            </View>
            <Image
              style={{
                width: 100,
                height: 100,
                backgroundColor: '#fff',
                borderRadius: 15,
                alignSelf: 'center',
              }}
              resizeMode={'stretch'}
              source={{
                uri: 'https://i.pinimg.com/236x/92/a6/61/92a66178b3d006d63422d5afc9dc8e18--margherita-recipe-pizza-margherita.jpg',
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bgImage: {
    width,
    height: height / 3,
    borderRadius: 50,
    flexDirection: 'column',
  },
  branchicon: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: 150,
    backgroundColor: '#EDE426',
    borderRadius: 25,
    alignSelf: 'flex-end',
    marginTop: height / 5,
    marginRight: 10,
  },
  txt: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'green',
    fontWeight: '400',
  },
  resDet: {
    flexDirection: 'row',
    height: height / 6,
    width: width / 1,
    backgroundColor: 'white',
    elevation: 15,
    shadowColor: '#757575',
  },
  containertxt: {padding: 20},
  containerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
  },
  listTxt: {fontSize: 12, flexWrap: 'wrap', flexShrink: 1},
  menulist: {
    flex: 1,
    marginTop: 50,
  },
});

export default Details;
