import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { uuid } from 'uuidv4';

const App = () => {
  const [items,setItems] = useState([
    {id: '1', text: 'Milk'},
    {id: '2', text: 'Eggs'},
    {id: '3', text: 'Bread'},
    {id: '4', text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = (text) => {
    if(!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    } else{
      setItems(prevItems => {
        return [{id: 5, text}, ...prevItems];
      });
    }
  };


  return(
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem}/>
        )}
        //<Text>{item.text}</Text>  } ^^w/o component
      />
      {//<Text style={{color: 'red', fontSize: 30}}> Hello World!</Text>
      }

      {/* Image example 
      <Image 
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} 
        style={styles.img}
      />
      */
      }
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0, //60 for pixel2 
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  /* Image Style Example
  img: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
  }
  */
})

export default App;