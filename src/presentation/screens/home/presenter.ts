import {useState} from 'react';

import {data, DataType, defaultActions} from '../../../components/data';
import {getRandomColor} from '../../../service/utils/indes';

const useHomeData = () => {
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [cardsData, setCardsData] = useState(data);

  const onAddCardPress = () => {
    setModalVisible(true);
  };

  const onSubmitCardDetail = () => {
    if (!name.trim()) {
      return;
    }

    const rawCardNumber = Array(16)
      .fill(0)
      .map(() => Math.floor(Math.random() * 10))
      .join('');

    const formattedNumber = rawCardNumber.match(/.{1,4}/g)?.join(' ') || '';

    const randomCvv = Math.floor(100 + Math.random() * 900).toString();
    const randomColor = getRandomColor();

    const newCard: DataType = {
      cardId: cardsData?.length + 1,
      name: name,
      number: formattedNumber,
      exp: '12/29',
      cvv: randomCvv,
      type: 'visa',
      image: require('../../../dls/assets/Visa.png'),
      backgroundColor: randomColor,
      defaultColor: randomColor,
      isFreezed: false,
      actions: defaultActions,
    };
    console.log('newCard--->', newCard);
    setCardsData([newCard, ...cardsData]);
    setName('');
    setModalVisible(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return {
    onAddCardPress,
    onSubmitCardDetail,
    modalVisible,
    setName,
    cardsData,
    name,
    closeModal,
  };
};

export default useHomeData;
