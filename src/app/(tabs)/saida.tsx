import { View, Text, StyleSheet, Alert, TextInput, ScrollView } from "react-native";
import { colors } from "@/styles/colors";
import Header from "@/components/header";
import { Button } from "@rneui/base";
import { useState } from "react";
import axios from "axios";
import QRCodeScanner from "@/components/QRCodeScanner/QRCodeScanner";

export default function Saida() {

    const [codigo, setCodigo] = useState("");
    const [matricula, setMatricula] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [destino, setDestino] = useState("");
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [qrCodeValue, setQrCodeValue] = useState<string>("");

    function handleQRCodeRead(data: string) {
        setQrCodeValue(data);
        setCodigo(data);
        setModalIsVisible(false);
        Alert.alert("QrCode lido com sucesso!", `Texto: ${data}`);
    }

    const enviarDados = async () => {
        try {
            const response = await axios.post("http://192.168.245.208:3000/api/saida", {
                codigo,
                matricula,
                quantidade,
                destino,
            });
            Alert.alert("Sucesso", "Entrada cadastrada!");
            setCodigo("");
            setMatricula("");
            setQuantidade("");
            setDestino("");
            setQrCodeValue("");
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            Alert.alert("Erro", "Falha ao cadastrar entrada.");
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Header />
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Formulário de Saída</Text>
                <View style={styles.formContainer}>
                    <Button
                        buttonStyle={styles.button}
                        titleStyle={{ textAlign: "center", width: "100%" }}
                        title="Ler QrCode"
                        onPress={() => setModalIsVisible(true)}
                    />
                    <Text style={styles.label}>Código do Produto</Text>
                    <TextInput
                        style={styles.input}
                        value={codigo}
                        onChangeText={setCodigo}
                        placeholder="Digite o código do produto ou leia o QrCode"
                    />
                    <Text style={styles.label}>Matrícula</Text>
                    <TextInput
                        style={styles.input}
                        value={matricula}
                        onChangeText={setMatricula}
                        placeholder="Informe a matrícula"
                    />
                    <Text style={styles.label}>Quantidade</Text>
                    <TextInput
                        style={styles.input}
                        value={quantidade}
                        keyboardType="numeric"
                        onChangeText={setQuantidade}
                        placeholder="Informe a quantidade"
                    />
                    <Text style={styles.label}>Destino</Text>
                    <TextInput
                        style={styles.input}
                        value={destino}
                        onChangeText={setDestino}
                        placeholder="Informe o destino"
                    />
                    <Button
                        buttonStyle={styles.button}
                        titleStyle={{ textAlign: "center", width: "100%" }}
                        title="Salvar Saída"
                        onPress={enviarDados}
                    />
                </View>
                <QRCodeScanner
                    isVisible={modalIsVisible}
                    onClose={() => setModalIsVisible(false)}
                    onScan={handleQRCodeRead}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white[600],
    },
    container: {
        padding: 20,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.blue[800],
        marginBottom: 20,
        textAlign: "center",
    },
    formContainer: {
        backgroundColor: colors.white[800],
        padding: 20,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
        alignItems: "center",
    },
    label: {
        fontSize: 16,
        color: colors.blue[800],
        marginTop: 10,
        alignSelf: "flex-start",
    },
    input: {
        height: 40,
        borderColor: colors.blue[800],
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: 10,
        marginTop: 10,
        width: "100%",
    },
    button: {
        backgroundColor: colors.blue[800],
        padding: 10,
        marginTop: 20,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});