import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingHorizontal: 15,
        borderBottomWidth: 2,
        borderBottomColor: colors.blue[800],
        justifyContent: "space-between",
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
});
