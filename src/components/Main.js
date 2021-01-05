import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Note from './Note';
import { SimpleLineIcons } from '@expo/vector-icons';



export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
    }

 render(){

     let notes = this.state.noteArray.map((val, key) => {
        return <Note key={key} 
                     keyval={key} 
                     val={val} 
                     deleteMethod={() => this.deleteNote(key)} />
     })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}> NOTER <SimpleLineIcons style={styles.iconNote} name="note" size={20} color="#FFFFFF" /> </Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {notes}
      </ScrollView>

      <View style={styles.footer}>
          <TextInput style={styles.txtInput}
                     onChangeText={(noteText) => this.setState({noteText})}
                     value={this.state.noteText}
                     placeholder='O que deseja anotar?'
                     placeholderTextColor="#000000"
                     underlineColorAndroid='transparent'>

          </TextInput>
      </View>

      <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
        <Text style={styles.addButtonTxt}>+</Text>
      </TouchableOpacity>
    </View>
   );
 }

 addNote() {
     if(this.state.noteText){
         var d = new Date();
         this.state.noteArray.push({
            'date': d.getDate() +
            "/" + (d.getMonth() + 1) +
            "/" + d.getUTCFullYear(),
            'note': this.state.noteText
         });
         this.setState({noteArray: this.state.noteArray})
         this.setState({noteText: ''});
     }
 }

 deleteNote(key){
     this.state.noteArray.splice(key, 1);
     this.setState({noteArray: this.state.noteArray})
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF'
  },
  header: {
      backgroundColor: '#1E90FF',
      alignItems: 'center',
      justifyContent: 'center',
  },
  headerTxt: {
      color: '#FFFFFF',
      fontSize: 21,
      padding: 26,
      fontWeight: 'bold'
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100
  },
  footer: {
      position: 'absolute',
      bottom: 519,
      left: 10,
      right: 10,
      zIndex: 10,
      width: '95%'
  },
  txtInput: {
      alignSelf: 'stretch',
      padding: 20,
      backgroundColor: '#B0C4DE',
      borderTopWidth: 2,
      borderTopColor: '#B0C4DE',
      textAlign: 'center',
      fontSize: 14,
      borderRadius: 20,
      fontWeight: 'bold'
  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#1E90FF',
      width: 90,
      height: 90,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8
  },
  addButtonTxt: {
      color: '#FFFFFF',
      fontSize: 24
  },
  
})