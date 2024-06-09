import {useEffect, useState} from "react";
import axios from "axios";
import {useLocalSearchParams} from "expo-router";
import {Text, View} from "react-native";
import {TestExample} from "@/components/TestExample";

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

    const {test} = useLocalSearchParams()
    const [quests, setQuests] = useState<QuestionType[]>([])

    useEffect(() => {
        axios.get<TestType>(`http://10.0.2.2:8000/api/test/${test}`)
            .then((response) => {
                setQuests(response.data.questions)
                console.log(response.data.questions)
            })
    }, []);

    return(
        <View style={{marginTop: 40, padding: 2}}>
            {quests.map((quest) => (
                <View key={quest.id}>
                    <TestExample {...quest}/>
                </View>
            ))}
        </View>
    )
}

export default Test
