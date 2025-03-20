import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { style } from "./style";
import { colors } from "@/styles/colors";

export default function Header() {
    return (
        <View style={[style.container, { backgroundColor: colors.white[800] }]}>
            <Image style={style.image} source={{ uri: "https://femaex.com.br/wp-content/uploads/2022/02/GrupoMulti_Logo_Positivo_Colorido-e1687991458490.png" }} />

            <TouchableOpacity>
                <Feather name="more-horizontal" size={20} color={colors.blue[800]} />
            </TouchableOpacity>

        </View>
    );
}