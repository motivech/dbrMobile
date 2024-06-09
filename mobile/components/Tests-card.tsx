import {View, Text, StyleSheet} from "react-native";
import {TestProps} from "@/app/(tabs)/[subject]";
import {rgbaColor} from "react-native-reanimated/lib/typescript/reanimated2/Colors";



export const TestsCard = (props: TestProps) => {
    return(
        <View style={style.cardContainer}>
            <Text style={style.name}>
                {props.name}
            </Text>
            <Text>
                {props.description}
            </Text>
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
        marginBottom: 16,
        backgroundColor: 'rgba(147, 201, 162, 0.2)',
    },
    name: {
        fontSize: 24,
        fontWeight:'bold',
        marginBottom: 8
    }
})