import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const style = StyleSheet.create({
    container: {
        width: "90%",
        height: 250,
        backgroundColor: colors.white[800],
        padding: 20,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignSelf: "center",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.blue[800],
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.gray[500],
        marginTop: 5,
    },
    button: {
        backgroundColor: colors.blue[800],
        padding: 10,
        marginTop: 20,
        borderRadius: 12,
        alignItems: 'center',
        width: '80%',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.white[800],
    },
});