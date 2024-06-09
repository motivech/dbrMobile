import {StyleSheet, Touchable, TouchableHighlight, TouchableOpacity, View} from 'react-native';

import {useEffect, useState} from "react";
import axios from "axios";
import {SubjectCard, SubjectCardProps} from "@/components/Subject-card";
import {router} from "expo-router";

export default function HomeScreen() {

    const [subjects, setSubjects] = useState<SubjectCardProps[]>([])

    useEffect(() => {
        axios.get('http://10.0.2.2:8000/api/subject')
            .then((response) => {
                setSubjects(response.data)
            })
    }, []);

    return (
            <View style={{marginTop: 40, padding: 2}}>
                {subjects.map((subject) => (
                    <TouchableOpacity  key={subject.id} onPress={() => {router.push(`/${subject.id}`)}}>
                        <SubjectCard {...subject}/>
                    </TouchableOpacity>
                ))}
            </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 20
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
