import React, {useState} from 'react';
import {
  Alert,
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
import {data, DataType, defaultActions} from '../../../components/data';
import {getRandomColor} from '../../../service/utils/indes';
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
      <TouchableOpacity
        style={{
          borderWidth: 10,
          borderColor: 'white',
          alignSelf: 'center',
          backgroundColor: 'white',
          borderRadius: 4,
          position: 'absolute',
          top: 100,
          right: 0,
          zIndex: 10,
        }}
        onPress={onAddCardPress}>
        <Text style={{fontSize: 14}}>Add new card</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <Text style={styles.title}>Debit Card</Text>
          <Image
            source={require('../../../dls/assets/Logo.png')}
            style={{height: 25, width: 25}}
          />
        </View>

        <View style={{marginTop: 24}}>
          <Text style={styles.label}>Available balance</Text>
          <View style={styles.amountRow}>
            <View
              style={{
                backgroundColor: '#01D167',
                paddingHorizontal: 12,
                paddingVertical: 3,
                borderRadius: 4,
              }}>
              <Text style={styles.currency}>$$</Text>
            </View>
            <Text style={styles.amount}>3,000</Text>
          </View>
        </View>
        <Modal
          transparent
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => {}}>
          <Pressable style={styles.overlay} onPress={closeModal}>
            <View style={styles.modalContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
              />

              <TouchableOpacity
                style={styles.submitButton}
                onPress={onSubmitCardDetail}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
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
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'white',
    alignItems: 'center',
    paddingTop: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -26,
  },
  label: {
    color: '#FFFFFF',
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currency: {
    color: 'white',
    fontSize: 12,
  },
  amount: {
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
  content: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    minHeight: height - height / 3,
  },
  text: {
    fontSize: 100,
    color: 'black',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // dark transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
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
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 24,
  },
});
