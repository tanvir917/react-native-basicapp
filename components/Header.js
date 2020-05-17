import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import Colors from '../constants/colors';
import TitleText from './TitleText';

const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 90,
      paddingTop: 36,
      backgroundColor:Colors.primary,
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });

export default Header;

