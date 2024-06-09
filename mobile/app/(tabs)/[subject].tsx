import {Text, TouchableOpacity, View} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import {FC, useEffect, useState} from "react";
import axios from "axios";
import {TestsCard} from "@/components/Tests-card";

export type TestProps = {
    id: number;
    name: string;
    description: string;
    subject_id: number;
}

const Subject = () => {
    const [tests, setTests] = useState<TestProps[]>([])

    const {subject} = useLocalSearchParams();

    useEffect(() => {
        axios.get(`http://10.0.2.2:8000/api/test/subject/${subject}`)
            .then((response) => {
                setTests(response.data)
                console.log(response.data)
            })
    }, [subject]);

    return (
        <View style={{marginTop: 40, padding: 2}}>
            {tests.map((test) => (
                <TouchableOpacity key={test.id} onPress={() => {router.push(`/tests/${test.id}`)}}>
                    <TestsCard {...test}/>
                </TouchableOpacity>
            ))}
        </View>
    )
}
export default Subject