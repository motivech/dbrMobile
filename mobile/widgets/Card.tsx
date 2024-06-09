import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ id, img, name, totalCountTest }) => {
    const navigation = useNavigation();
    const handleNavigate = () => navigation.navigate('Tests', { id });

    return (
        <TouchableOpacity onPress={handleNavigate} style={styles.card}>
            <View style={styles.cardDivLogo}>
                <Image style={styles.cardLogo} source={{ uri: img }} alt="not found" />
            </View>
            <View style={styles.cardText}>
                <Text style={styles.cardH3}>{name}</Text>
                <Text style={styles.cardTests}>{totalCountTest} тестов</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        // your card styles
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    cardDivLogo: {
        // your cardDivLogo styles
        alignItems: 'center',
        marginBottom: 10,
    },
    cardLogo: {
        // your cardLogo styles
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    cardText: {
        // your cardText styles
        alignItems: 'center',
    },
    cardH3: {
        // your cardH3 styles
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardTests: {
        // your cardTests styles
        fontSize: 14,
        color: '#555',
    },
});

export default Card;
