import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerInput : {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    inputSide: {
       width: 185
    },
    buttonCalculate:{
        backgroundColor:'#0059AA',
        marginHorizontal: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginTop:20

    },
    buttonLimpar: {
        backgroundColor:'#D32904',
        marginHorizontal: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10
    },
    textButton:{
        color: '#fff',
        fontSize: 28
    },
    caixaIdade : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        margin: 10,
        backgroundColor: '#9B4EA1',
        alignItems: 'center'
    },
    caixaAno : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        margin: 10,
        backgroundColor: '#3857C1',
        alignItems: 'center'
    },
    textCaixa1: {
        color: '#fff',
        fontSize: 16
    },
    textCaixa2: {
        color: '#fff',
        fontSize: 24
    },
    caixaFinal : {
   
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        margin: 10,
        gap: 40,
        backgroundColor: '#3857C1',
        alignItems: 'center'
    },
  });
  