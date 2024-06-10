import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';
import axios from "axios";
import {$auth} from "@/app/(tabs)/_layout";
import {router} from "expo-router";

export const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Проверка заполнения полей
        if (!login || !password) {
            Alert.alert('Ошибка', 'Все поля обязательны для заполнения');
            return;
        }

        // Логика отправки данных на сервер
        axios.post('http://10.0.2.2:8000/api/user/auth', {login, password})
            .then((response) => {
                console.log(response);
                $auth.set(response.data)
                router.push('/')
            })
            .catch((error) => {
                console.log(error);
                Alert.alert('Ошибка', 'Не удалось выполнить вход');
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Text style={styles.cardText}>Вход</Text>
            </View>
            <View style={styles.inputContainer}>
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
            <Button title="Войти" onPress={handleLogin}/>
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

export default LoginForm