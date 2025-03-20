import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { colors } from "@/styles/colors";
import { style } from "./style";

export default function CardIndexBranco() {
    const router = useRouter();

    return (
        <View style={style.container}>
            <Text style={style.title}>Bem Vindo ao App!</Text>
            
            <TouchableOpacity
                style={style.button}
                onPress={() => router.push('/entrada')}>
                <Text style={style.buttonText}>Vamos Começar?</Text>
            </TouchableOpacity>
        </View>
    );
}
