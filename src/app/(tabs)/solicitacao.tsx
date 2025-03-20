import { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, Alert } from "react-native";
import { Button } from "@rneui/base";
import axios from "axios";
import Header from "@/components/header";
import { colors } from "@/styles/colors";

export default function Solicitacao() {
    const [matricula, setMatricula] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [motivo, setMotivo] = useState("");
    const [destino, setDestino] = useState("");
    const [referencia, setReferencia] = useState("");
    const [observacao, setObservacao] = useState("");

    const enviarDados = async () => {
        try {
            const response = await axios.post("http://192.168.245.208:3000/api/solicitacao", {
                matricula,
                descricao,
                quantidade,
                motivo,
                destino,
                referencia,
                observacao
            });
            Alert.alert("Sucesso", "Entrada cadastrada!");
            setMatricula("");
            setDescricao("");
            setQuantidade("");
            setMotivo("");
            setDestino("");
            setReferencia("");
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
                <Text style={styles.title}>Formulário de Solicitação</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Matrícula</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe a matrícula"
                        value={matricula}
                        onChangeText={setMatricula}
                    />
                    <Text style={styles.label}>Descrição e Especificação</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe a descrição e especificação"
                        value={descricao}
                        onChangeText={setDescricao}
                    />
                    <Text style={styles.label}>Quantidade</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe a quantidade"
                        keyboardType="numeric"
                        value={quantidade}
                        onChangeText={setQuantidade}
                    />
                    <Text style={styles.label}>Motivo de Solicitação</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe o motivo da solicitação"
                        value={motivo}
                        onChangeText={setMotivo}
                    />
                    <Text style={styles.label}>Destino dos Itens</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe o destino dos itens"
                        value={destino}
                        onChangeText={setDestino}
                    />
                    <Text style={styles.label}>Referência</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Se encontrado na internet, insira aqui"
                        value={referencia}
                        onChangeText={setReferencia}
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
                        title="Enviar Solicitação"
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
        paddingBottom: 20,
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
