import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useStore } from "@nanostores/react";
import { $testResult } from "@/app/(tabs)/_layout";

const Result = () => {
    const testResult = useStore($testResult);

    if (!testResult) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Загрузка результатов...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Результаты теста</Text>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Общее количество вопросов: {testResult.countQuestions}</Text>
                <Text style={styles.resultText}>Общий балл: {testResult.totalScore}%</Text>
                <Text style={styles.resultText}>Ошибки в вопросах:</Text>
                {testResult.errorQuestionsId.length === 0 ? (
                    <Text style={styles.noErrorsText}>Нет ошибок</Text>
                ) : (
                    testResult.errorQuestionsId.map((question) => (
                        <Text key={question.id} style={styles.errorText}>- Вопрос: {question.text}</Text>
                    ))
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f7f7f7',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    resultContainer: {
        width: '100%',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    resultText: {
        fontSize: 18,
        marginBottom: 10,
        color: '#555',
    },
    noErrorsText: {
        fontSize: 18,
        color: '#28a745',
    },
    errorText: {
        fontSize: 18,
        color: '#dc3545',
    },
    message: {
        fontSize: 18,
        color: '#777',
    }
});

export default Result;