import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default class Note extends Component {
 render(){
  return (
    <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteTextDate}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}>
                <EvilIcons name="trash" size={29} color="#FFFFFF" />
            </Text>
        </TouchableOpacity>
    </View>
   );
 }
}

const styles = StyleSheet.create({
  note: {
      position: 'relative',
      padding: 20,
      top: 70,
      paddingRight: 100,
      borderBottomWidth: 2,
      borderBottomColor: '#EDEDED'
  },
  noteTextDate: {
      fontSize: 14,
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#0000CD'
  },
  noteText: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#0000CD',
      fontSize: 17,
      fontWeight: 'bold',
      marginTop: 3
  },
  noteDelete: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF0000',
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10
  },
  noteDeleteText: {
      color: '#FFFFFF'
  }
})