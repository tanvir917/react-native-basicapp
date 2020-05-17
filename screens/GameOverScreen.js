import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
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
            <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="NEW GAME" style={styles.button} onPress={props.onRestart}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'green',
        fontSize: 40
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    button: {
        margin: 20
    }
  });

export default GameOverScreen;



