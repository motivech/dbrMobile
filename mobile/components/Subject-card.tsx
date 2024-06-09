import {Image, Text, View, StyleSheet, ImageBackground} from "react-native";
import axios from "axios";
import {black} from "colorette";

export type SubjectCardProps = {
    id: number;
    name: string;
    img: string;
}


export const SubjectCard = (props: SubjectCardProps) => {
    return(
        <ImageBackground source={{uri: props.img}} style={style.cardContainer}>
            <Text style={style.cardText}>{props.name}</Text>
        </ImageBackground>
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

