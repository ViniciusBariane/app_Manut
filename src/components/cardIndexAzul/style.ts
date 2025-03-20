import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const style = StyleSheet.create({
    container: {
        width: "90%",
        height: 300,
        backgroundColor: colors.blue[800],
        padding: 20,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.white[800],
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.white[800],
        marginTop: 5,
        textAlign: 'center',
    },
    description: {
        color: colors.white[800],
        marginTop: 10,
        textAlign: 'center',
    },
    button: {
        backgroundColor: colors.white[800],
        padding: 10,
        marginTop: 30,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.blue[800],
    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        width: "100%",
        paddingHorizontal: 20,
        alignItems: "center",
    },
    iconCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.blue[700],
        alignItems: "center",
        justifyContent: "center",
    },
});