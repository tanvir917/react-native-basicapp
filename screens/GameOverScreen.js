import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import BodyText from '../components/BodyText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {

    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        }

        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    })
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={{padding: availableDeviceWidth < 350 ? 5 : 25, ...styles.text}}>The Game is Over!</Text>
                <View 
                    style={{width: availableDeviceWidth * 0.7,
                    height: availableDeviceWidth * 0.7,
                    borderRadius: availableDeviceWidth * 0.7 / 2,
                    marginVertical: availableDeviceHeight / 30, 
                    ...styles.imageContainer}}
                >
                    <Image 
                        fadeDuration={1000}
                        //source={require('../assets/success.png')}
                        source={{uri: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-orange-samurai-esports-logo-for-gaming-mascot-or-twitch-png-image_4278438.jpg'}}
                        //source={{uri: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-blue-assassin-esports-logo-for-gaming-mascot-png-image_4295380.jpg'}}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View style={{margin: availableDeviceHeight / 60}}>
                    <BodyText style={{fontSize: availableDeviceHeight < 400 ? 16 : 20, ...styles.resultText}}>
                        Your Phone needed{' '} 
                        <Text style={styles.highlight}>{props.roundsNumber}</Text>
                        {' '}rounds to guess the number{' '}
                        <Text style={styles.highlight}>{props.userNumber}</Text>
                    </BodyText>
                </View>
                
                <MainButton onPress={props.onRestart}>
                    NEW GAME
                </MainButton>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    text: {
        color: 'green',
        fontSize: 40,
        
    },
    imageContainer: {
        
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        
    },
    image: {
        width: '100%',
        height: '100%'
    },
    // resultContainer: {
    //     margin: availableDeviceHeight / 60
    // },
    highlight: {
        color: Colors.primary,
        fontFamily: 'openSansBold'
    },
    resultText: {
        textAlign: 'center',
        //fontSize: availableDeviceHeight < 400 ? 16 : 20
    }
  });

export default GameOverScreen;



