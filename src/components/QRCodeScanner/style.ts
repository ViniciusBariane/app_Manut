import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 32,
        left: 32,
        right: 32,
    },
    cancelButton: {
        backgroundColor: colors.blue[600],
        borderRadius: 12,
    },
});
