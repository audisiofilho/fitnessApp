import React, {useState, useContext, useEffect, useCallback} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../contexts/auth';

import Header from '../../components/Header';
import ExercisesList from '../../components/ExercisesList';
import {Container, HeaderHome, HeaderTitle, ListExercises} from './styles';
import {color} from 'react-native-reanimated';

export default function Home() {
  const {user} = useContext(AuthContext);

  const [exercises, setExercices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [loadingRefresh, setLoadingRefresh] = useState(false);
  const [lastItem, setLastItem] = useState('');
  const [emptyList, setEmptyList] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      function fetchPosts() {
        firestore()
          .collection(' exercises')
          .where('treino', '==', selectedValue)
          .get()
          .then(snapshot => {
            if (isActive) {
              setExercices([]);
              const exerciseList = [];

              snapshot.docs.map(u => {
                exerciseList.push({
                  ...u.data(),
                  id: u.id,
                });
              });
              setEmptyList(!!snapshot.empty);
              setExercices(exerciseList);
              //console.log(exercises);
              setLastItem(snapshot.docs[snapshot.docs.length - 1]);
              setLoading(false);
            }
          });
      }

      fetchPosts();

      return () => {
        isActive = false;
      };
    }, [selectedValue]),
  );

  async function handleRefreshPosts() {
    setLoadingRefresh(true);

    firestore()
      .collection(' exercises')
      .where('treino', '==', selectedValue)
      .get()
      .then(snapshot => {
        setExercices([]);
        const exerciseList = [];

        snapshot.docs.map(u => {
          exerciseList.push({
            ...u.data(),
            id: u.id,
          });
        });
        setEmptyList(false);
        setExercices(exerciseList);
        setLastItem(snapshot.docs[snapshot.docs.length - 1]);
      });
    setLoadingRefresh(false);
  }

  async function getListExercises() {
    if (emptyList) {
      setLoading(false);
      return null;
    }

    if (loading) return;

    firestore()
      .collection(' exercises')
      .where('treino', '==', selectedValue)
      .startAfter(lastItem)
      .get()
      .then(snapshot => {
        const exerciseList = [];

        snapshot.docs.map(u => {
          exerciseList.push({
            ...u.data(),
            id: u.id,
          });
        });
        setEmptyList(!!snapshot.empty);
        setLastItem(snapshot.docs[snapshot.docs.length - 1]);
        setExercices(oldExercices => [...oldExercices, ...exerciseList]);
        setLoading(false);
      });
  }

  return (
    <Container>
      <Header />
      <HeaderHome style={{elevation: 15}}>
        <HeaderTitle style={{fontFamily: 'Roboto-Bold'}}>
          Exercicios De Hoje:
        </HeaderTitle>
          <Picker
            mode="dropdown"
            selectedValue={selectedValue}
            style={{
              width: 160,
              color: '#fff',
              fontWeight: "bold",
              fontSize: 30

            }}
            dropdownIconColor="#fff"
            dropdownIconRippleColor={'#fff'}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Peito" value="Peito" />
            <Picker.Item label="Pernas" value="Pernas" />
              
          </Picker>
      </HeaderHome>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={50} color="#DE1414" />
        </View>
      ) : (
        <ListExercises
          showsVerticalScrollIndicator={false}
          data={exercises}
          renderItem={({item}) => <ExercisesList data={item} />}
          refreshing={loadingRefresh}
          onRefresh={handleRefreshPosts}
          onEndReached={() => getListExercises()}
          onEndReachedThreshold={0.1}
        />
      )}
    </Container>
  );
}
