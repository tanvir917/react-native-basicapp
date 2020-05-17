import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Colors from '../constants/colors';
import TitleText from './TitleText';

const Header = props => {
    return (
        <View 
            style={{
                ...styles.headerBase, 
                ...Platform.select({
                    ios: styles.headerIOS,
                    android: styles.headerAndroid
                })
            }}
        >
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    )
};

const styles = StyleSheet.create({
    headerBase: {
      width: '100%',
      height: 90,
      paddingTop: 36,
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerIOS: {
      backgroundColor: 'white',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1 
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0
    },
    headerTitle: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });

export default Header;

