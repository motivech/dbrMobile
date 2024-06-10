import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import {useStore} from "@nanostores/react";
import {$auth, $counter, $testResult} from "@/app/(tabs)/_layout";
import {after} from "node:test";
import {router} from "expo-router";
import axios from "axios";

const ProfileScreen = () => {
    const user = useStore($auth)
    const counter = useStore($counter)
    const [completedTest, setcompletedTest] = useState([])
    const handleLogOut = () => {
        $auth.set(null)
        $testResult.set(null)
        router.push('/LoginForm')
    };
    useEffect(
        () => {
            if (user) axios.get(`http://10.0.2.2:8000/api/test/completeds/${user?.id}`).then(res => {
                console.log(res.data)
                setcompletedTest(res.data)
            })
        }, [user, counter]
    )
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/1.jpg',
                    }}
                />
                <Text style={styles.name}>{user?.name}</Text>
                <Text style={styles.email}>{user?.login}</Text>
                <Text style={styles.email}>Уровень {user?.level}</Text>
            </View>
            <ScrollView style={styles.body}>
                {
                    completedTest.map(cp => (
                        <View key={cp.id}>
                            <Text></Text>
                        </View>
                    ))
                }
            </ScrollView>
            <Button title={'Выйти'} onPress={handleLogOut}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email: {
        color: '#666',
        marginBottom: 20,
    },
    body: {
        padding: 20,
        marginBottom: "auto"
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export default ProfileScreen;

