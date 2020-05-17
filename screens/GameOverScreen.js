import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={styles.text}>The Game is Over!</Text>
                <View style={styles.imageContainer}>
                    <Image 
                        fadeDuration={1000}
                        //source={require('../assets/success.png')}
                        source={{uri: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-orange-samurai-esports-logo-for-gaming-mascot-or-twitch-png-image_4278438.jpg'}}
                        //source={{uri: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-blue-assassin-esports-logo-for-gaming-mascot-png-image_4295380.jpg'}}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>
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
        padding: Dimensions.get('window').width < 350 ? 5 : 25
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        margin: Dimensions.get('window').height / 60
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'openSansBold'
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
  });

export default GameOverScreen;



