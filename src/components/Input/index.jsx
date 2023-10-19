import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Input(props){


    return(
        <View style={styles.conteiner}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput  
                value={props.valueState}
                onChangeText={props.changeText}
                style={[styles.input, props.styleInput]}/>
        </View>
    )

}