import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadProducts} from '../../../redux/actions/productActions';
import {RootState} from '../../../redux/reducers';
import {Product} from '../../../domain/models/Product';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigators/types';
import Header from '../../components/Header';

type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const bannerImages = [
  require('../../../dls/assets/banner1.jpg'),
  require('../../../dls/assets/banner2.jpg'),
  require('../../../dls/assets/banner3.jpg'),
  require('../../../dls/assets/banner4.jpg'),
];

const HomeScreen = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<HomeScreenNavProp>();
  const {products, loading} = useSelector(
    (state: RootState) => state.productState,
  );

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const renderItem = ({item}: {item: Product}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetails', {product: item})}>
      <Image source={{uri: item.images[0]}} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price}</Text>
      <Text numberOfLines={2} style={styles.description}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Home" showCart />

      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        style={styles.searchTouchable}>
        <Text style={styles.searchPlaceholder}>Search products...</Text>
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.banner}>
        {bannerImages.map((item, index) => (
          <Image
            key={index}
            source={item}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      {loading ? (
        <ActivityIndicator
          style={{marginTop: 100}}
          size="large"
          color="tomato"
        />
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  searchTouchable: {
    margin: 12,
    padding: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#f9f9f9',
  },
  searchPlaceholder: {
    color: '#888',
    fontSize: 14,
  },
  banner: {marginBottom: 10, paddingLeft: 12},
  bannerImage: {
    width: 320,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  list: {paddingBottom: 30},
  card: {
    flex: 1,
    margin: 8,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    alignItems: 'center',
  },
  image: {width: 120, height: 120, borderRadius: 8},
  name: {fontWeight: 'bold', marginTop: 8},
  price: {color: 'green', fontWeight: '600'},
  description: {fontSize: 12, textAlign: 'center', marginTop: 4},
});

export default HomeScreen;
