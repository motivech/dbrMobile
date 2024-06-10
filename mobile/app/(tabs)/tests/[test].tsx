import {useEffect, useState} from "react";
import axios from "axios";
import {router, useLocalSearchParams} from "expo-router";
import {Button, Text, View} from "react-native";
import {TestExample} from "@/components/TestExample";
import {$auth, $counter, $testResult} from "@/app/(tabs)/_layout";
import {useStore} from "@nanostores/react";

type TestType = {
    questions: QuestionType[]
}

export type QuestionType = {
    id: number;
    answers: AnswerType[];
    text: string;
}

type AnswerType = {
    id: number;
    value: string;
    question_id: number;
}

const Test = () => {
    const user = useStore($auth)
    const {test} = useLocalSearchParams()
    const [quests, setQuests] = useState<QuestionType[]>([])
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>(
        {}
    );

    useEffect(() => {
        axios.get<TestType>(`http://10.0.2.2:8000/api/test/${test}`)
            .then((response) => {
                setQuests(response.data.questions)
                console.log(response.data.questions)
            })
    }, []);

    // @ts-ignore
    function transformAnswers(answers) {
        return Object.keys(answers).map(questionId => ({
            question_id: parseInt(questionId),
            answer_id: answers[questionId]
        }));
    }

    const handleSelectAnswer = (questionId: number, answerId: number) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answerId,
        }));
    };
    const handleSubmitTest = () => {
        axios.post(`http://10.0.2.2:8000/api/test/${test}/check`, {answers:transformAnswers(selectedAnswers), user_id: user?.id}).then(response => {
            $testResult.set(response.data)
            $counter.set($counter.get()+1)
            router.push('/tests/result')
        })


    };



    return (
        <View style={{ marginTop: 40, padding: 2 }}>
            {quests.map((quest) => (
                <View key={quest.id}>
                    <TestExample
                        question={quest}
                        onSelect={(answerId) => handleSelectAnswer(quest.id, answerId)}
                    />
                </View>
            ))}
            <Button title="Сдать тест" onPress={handleSubmitTest} />
        </View>
    );
};



export default Test
