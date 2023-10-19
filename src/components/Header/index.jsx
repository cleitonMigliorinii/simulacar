import { Text, View } from "react-native";
import { styles } from "./styles";

export function Header({children}) {

    return(
        <View style={styles.header}>
            <Text style={styles.textHeader}>{children}</Text>
        </View>
    )
}