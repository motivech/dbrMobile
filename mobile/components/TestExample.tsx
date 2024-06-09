import {StyleSheet, Text, View} from "react-native";
import {QuestionType} from "@/app/(tabs)/tests/[test]";
import RadioGroup from "react-native-radio-buttons-group";
import {useState} from "react";


export const TestExample = (props: QuestionType) => {

    const [selectId, setSelectId] = useState('')


    return(
        <View>
            <View style={style.cardContainer}>
                <Text>
                    {props.text}
                </Text>
            </View>
            <View style={{alignItems:'flex-start'}}>
                <RadioGroup radioButtons={props.answers.map((answer) => ({
                    id: answer.id.toString(),
                    value: answer.value,
                    label: answer.value,
                }))} onPress={setSelectId} selectedId={selectId}/>
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