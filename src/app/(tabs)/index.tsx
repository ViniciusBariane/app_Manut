import Header from "@/components/header";
import CardIndexAzul from "@/components/cardIndexAzul";
import CardIndexBranco from "@/components/cardIndexBranco";
import { View, Text, ScrollView } from "react-native";
import { colors } from "@/styles/colors";

export default function Index() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <CardIndexBranco />
                <CardIndexAzul />
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: colors.gray[800], fontSize: 12 }}>
                        Direitos Reservados © 2025
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}