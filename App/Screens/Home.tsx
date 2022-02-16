import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  Dimensions,
  Modal,
  StyleSheet,
  ScrollView,
  LogBox,
} from 'react-native';
import dataFile from '../Redux/Restaurants/file';

import {useDispatch, useSelector} from 'react-redux';
import {payloadPorduct} from '../Redux/Restaurants/index';
import {Entypo, EvilIcons, FontAwesome5, Ionicons} from '../Components/Icons';
import TageCard from '../Components/menuList';
import RestaurantList from '../Components/restaurantList';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default function Home({navigation}) {
  //* Variable declaration
  const dispatch = useDispatch();
  let [products, setProducts] = useState<any[]>(
    useSelector(state => state.Restuarant?.restuarantProducts),
  );
  let mainProduct: any[] = useSelector(
    state => state.Restuarant?.restuarantProducts,
  );

  const [restaurantTags, setrestaurantTags] = useState<any[]>(
    products.map((val: any) => val.tags),
  );
  const [searchText, setSearchText] = useState<string>('');
  const [modalName, setModalName] = useState<string>('');
  const [modalTags, setModalTags] = useState<string>('');

  const [showModal, setShowModal] = useState<boolean>(false);

  //* function declaration

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  //*filter by restaurant
  const restaurantFilter = text => {
    setSearchText(text);

    //* we here search on restaurant by charchter, and if the charachter not exists we show all restaurants
    products.filter(
      (oldval, indx) =>
        oldval.name.toLowerCase().match(text) && setProducts([products[indx]]),
    );
    text == '' && setProducts(mainProduct);
  };

  //*Add Restaurant
  const addrestaurant = () => {
    setShowModal(!showModal);
    const obj = {
      name: modalName,
      logo: 'https://thumbs.dreamstime.com/b/print-134251864.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: [
        {
          name: modalTags,
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/sandwich.png?alt=media&token=24612ee9-cb30-4b4e-a9ea-8d4a5b7e0bf5',
        },
      ],
    };
    setProducts(prv => [...prv, obj]);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{borderRadius: 1, elevation: 1.0}}>
        <Ionicons
          name="md-chevron-back"
          size={40}
          color="#214252"
          style={{marginLeft: 5}}
          onPress={() => console.log('first')}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            backgroundColor: '#E5E8EB',
            margin: 10,
            borderRadius: 50,
            alignItems: 'center',
          }}>
          <EvilIcons
            name="search"
            size={40}
            color="#757575"
            style={{marginLeft: 10}}
          />
          <TextInput
            style={{fontSize: 15, color: 'black'}}
            placeholder="What would you like to buy"
            placeholderTextColor="#757575"
            onChangeText={text => restaurantFilter(text)}
          />
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <TageCard data={restaurantTags} />
      </View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 30,
        }}>
        {' '}
        Restaurants{' '}
      </Text>
      <ScrollView>
        <RestaurantList data={products} navigation={navigation} />
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 20,
        }}>
        <TouchableOpacity
          style={{
            shadowColor: '#2E2C00',
            borderRadius: 25,
            elevation: 20,
            width: width / 2,
            height: height / 15,
            backgroundColor: '#EDE426',
            flexDirection: 'row',
          }}
          onPress={() => setShowModal(!showModal)}>
          <FontAwesome5
            name="shopping-bag"
            size={20}
            color="white"
            style={{
              marginLeft: 20,
              alignSelf: 'center',
              width: 20,
              height: 20,
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginLeft: 10,
              fontSize: 13,
              color: '#2d6a4f',
              fontWeight: '700',
            }}>
            ADD NEW RESTAURANT
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Entypo
              name="cross"
              size={40}
              color="#757575"
              style={styles.modalIcon}
              onPress={() => setShowModal(!showModal)}
            />
            <TextInput
              style={styles.modalTextInput}
              placeholder="name"
              placeholderTextColor="#757575"
              onChangeText={text => setModalName(text)}
            />
            <TextInput
              style={styles.modalTextInput}
              placeholder="tags"
              placeholderTextColor="#757575"
              onChangeText={text => setModalTags(text)}
            />
            <TouchableOpacity
              style={styles.modalTouch}
              onPress={() => addrestaurant()}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '900',
                  alignSelf: 'center',
                }}>
                ADD
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    width,
    height: height / 2.5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalTextInput: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#EDE426',
    width: width - 30,
    fontWeight: '900',
    marginTop: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  modalIcon: {marginLeft: 10, alignSelf: 'flex-end'},
  modalTouch: {
    shadowColor: '#2E2C00',
    borderRadius: 25,
    width: width / 2,
    height: height / 15,
    backgroundColor: '#EDE426',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
    justifyContent: 'center',
  },
});
