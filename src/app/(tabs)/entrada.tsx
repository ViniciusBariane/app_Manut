import { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, Alert } from "react-native";
import { Button } from "@rneui/base";
import axios from "axios";
import Header from "@/components/header";
import { colors } from "@/styles/colors";

export default function Entrada() {
    const [codigo, setCodigo] = useState("");
    const [requisitante, setRequisitante] = useState("");
    const [destino, setDestino] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [observacao, setObservacao] = useState("");

    const enviarDados = async () => {
        try {
            const response = await axios.post("http://192.168.245.208:3000/api/entrada", {
                codigo,
                requisitante,
                destino,
                localizacao,
                quantidade,
                observacao
            });
            Alert.alert("Sucesso", "Entrada cadastrada!");
            setCodigo("");
            setRequisitante("");
            setDestino("");
            setLocalizacao("");
            setQuantidade("");
            setObservacao("");
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            Alert.alert("Erro", "Falha ao cadastrar entrada.");
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Header />
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Formulário de Entrada</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Código do Produto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe o código do produto"
                        value={codigo}
                        onChangeText={setCodigo}
                    />
                    <Text style={styles.label}>Requisitante</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe o requisitante"
                        value={requisitante}
                        onChangeText={setRequisitante}
                    />
                    <Text style={styles.label}>Destino</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe o destino"
                        value={destino}
                        onChangeText={setDestino}
                    />
                    <Text style={styles.label}>Localização</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe a localização"
                        value={localizacao}
                        onChangeText={setLocalizacao}
                    />
                    <Text style={styles.label}>Quantidade</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe a quantidade"
                        keyboardType="numeric"
                        value={quantidade}
                        onChangeText={setQuantidade}
                    />
                    <Text style={styles.label}>Observação</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe a observação"
                        value={observacao}
                        onChangeText={setObservacao}
                    />
                    <Button
                        buttonStyle={styles.button}
                        title="Salvar Entrada"
                        onPress={enviarDados}
                        titleStyle={{ textAlign: "center", width: "100%" }}
                    />
                </View>
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
    button: {
        backgroundColor: colors.blue[800],
        padding: 10,
        marginTop: 20,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        color: colors.blue[800],
        marginTop: 10,
        alignSelf: "flex-start",
    },
    input: { height: 40, borderColor: colors.blue[800], borderWidth: 1, borderRadius: 12, paddingLeft: 10, marginTop: 10, width: "100%" }
});