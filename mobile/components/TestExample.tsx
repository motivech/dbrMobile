import {Button, StyleSheet, Text, View} from "react-native";
import {QuestionType} from "@/app/(tabs)/tests/[test]";
import RadioGroup from "react-native-radio-buttons-group";
import {useState} from "react";

type TestExampleProps = {
    question: QuestionType;
    onSelect: (answerId: number) => void
}
export const TestExample = (props: TestExampleProps) => {

    const [selectId, setSelectId] = useState('')

    return(
        <View>
            <View style={style.cardContainer}>
                <Text>
                    {props.question.text}
                </Text>
            </View>
            <View style={{alignItems:'flex-start'}}>
                <RadioGroup
                    radioButtons={props.question.answers.map((answer) => ({
                        id: answer.id.toString(),
                        value: answer.value,
                        label: answer.value,
                    }))}
                    onPress={(selectedButton) => {
                        console.log(selectedButton)
                        const answer = props.question.answers.map((answer) => ({
                            id: answer.id.toString(),
                            value: answer.value,
                            label: answer.value,
                        })).find(el => +el.id === +selectedButton)!
                        props.onSelect(+answer.id)
                        setSelectId(selectedButton);
                    }}
                    selectedId={selectId}
                />
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    cardContainer: {
        height:100,
        justifyContent:'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        opacity: 0.8,
        marginBottom: 16
    },
    cardText: {
        fontSize: 25,
        fontWeight: 'bold',
        opacity: 1
    }
})