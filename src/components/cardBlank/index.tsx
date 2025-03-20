import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { colors } from "@/styles/colors";
import { style } from "./style";
import { Button } from "@rneui/base";


export default function CardBlank() {
    const router = useRouter();

    return (
        <View style={style.container}></View>
    );
}
