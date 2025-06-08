import React from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CradSwipeScreen from '../../../components/cardCarousal';
import useHomeData from './presenter';

const {height} = Dimensions.get('window');

const Home = () => {
  const {
    modalVisible,
    cardsData,
    name,
    onAddCardPress,
    setName,
    closeModal,
    onSubmitCardDetail,
  } = useHomeData();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={onAddCardPress}>
        <Text style={styles.addButtonText}>Add new card</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <Text style={styles.headerTitle}>Debit Card</Text>
          <Image
            source={require('../../../dls/assets/Logo.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Available balance</Text>
          <View style={styles.balanceRow}>
            <View style={styles.currencyTag}>
              <Text style={styles.currencyText}>$$</Text>
            </View>
            <Text style={styles.balanceAmount}>3,000</Text>
          </View>
        </View>

        <Modal
          transparent
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => {}}>
          <Pressable style={styles.overlay} onPress={closeModal}>
            <View style={styles.modal}>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
              />
              <TouchableOpacity
                style={styles.submitButton}
                onPress={onSubmitCardDetail}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.whiteSheet}>
          <CradSwipeScreen data={cardsData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C365A',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height / 3,
    backgroundColor: '#0C365A',
    padding: 16,
    zIndex: 1,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -26,
  },
  logo: {
    height: 25,
    width: 25,
  },
  balanceContainer: {
    marginTop: 24,
  },
  balanceLabel: {
    color: '#FFFFFF',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyTag: {
    backgroundColor: '#01D167',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 4,
  },
  currencyText: {
    color: 'white',
    fontSize: 12,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  scroll: {
    flex: 1,
    zIndex: 2,
  },
  scrollContent: {
    paddingTop: height / 3 + 16,
  },
  whiteSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    minHeight: height - height / 3,
  },
  addButton: {
    borderWidth: 10,
    borderColor: 'white',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    position: 'absolute',
    top: 100,
    right: 0,
    zIndex: 10,
  },
  addButtonText: {
    fontSize: 14,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    width: '80%',
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#0C365A',
    paddingVertical: 12,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 24,
  },
});
