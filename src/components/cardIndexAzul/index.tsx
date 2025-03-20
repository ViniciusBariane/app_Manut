import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from "@/styles/colors";
import { style } from "./style";

export default function CardIndexAzul() {
    return (
        <View style={style.container}>
            <Text style={style.subtitle}>Multi Mobile</Text>
            <Text style={style.title}>Explore as Funcionalidades</Text>

            <Text style={style.description}>
                Este aplicativo permite que você leia QR Codes para registrar entradas e saídas de estoque.
                Use a câmera para escanear e gerenciar facilmente o fluxo de produtos.
            </Text>

            <View style={style.iconsContainer}>
                <View style={style.iconCircle}>
                    <Icon name="qr-code-scanner" size={30} color={colors.white[800]} />
                </View>

                <View style={style.iconCircle}>
                    <Icon name="storage" size={30} color={colors.white[800]} />
                </View>

                <View style={style.iconCircle}>
                    <Icon name="history" size={30} color={colors.white[800]} />
                </View>
            </View>
        </View>
    );
}