import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';
import axios from "axios";

import {router} from "expo-router";

export const RegisterForm = () => {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = () => {
        // Здесь происходит логика регистрации
        if (!name || !login || !password) {
            Alert.alert('Ошибка', 'Все поля обязательны для заполнения');
            return;
        }


        // Добавьте логику сохранения данных (например, отправка на сервер)
        axios.post('http://10.0.2.2:8000/api/user/register', {name, login, password}).then((response) => {
            console.log(response)
        })

        Alert.alert('Успешно', 'Регистрация прошла успешно');
    };

    const handleAlreadyHaveAccount = () => {
        router.push('/LoginForm')
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Text style={styles.cardText}>Регистрация</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Имя"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Логин"
                    value={login}
                    onChangeText={setLogin}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <Button title="Регистрация" onPress={handleRegister}/>
            <Button title="Уже есть аккаунт?" onPress={handleAlreadyHaveAccount}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        padding: 16,
    },
    cardContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 16,
    },
    cardText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
        color: '#333',
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: '#6200EE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default RegisterForm