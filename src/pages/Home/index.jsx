import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useState } from 'react';

const VALOR_INCIAL = 1000

export default function Home(){

    const [nome, setNome] = useState('')
    const [carro, setCarro] = useState('')
    const [idade, setIdade] = useState(0)
    const [ano, setAno] = useState(0)
    const [valorFinal, setValorFinal] = useState(VALOR_INCIAL)
    const [acrecimoIdade, setAcrecimoIdade] = useState(0)
    const [acrecimoAno, setAcrecimoAno] = useState(0)

    function calcularSimulacao(){

        const date = new Date();

        if(ano < 1900 || ano > (date.getFullYear() +1) ){
            Alert.alert('Ano informado esta invalido')
        }
        
        if(idade < 16 ){
            Alert.alert('Você não tem idade para fazer um seguro')
        }
        setAcrecimoAno(0)

        let acrecismoIdade = calcularPorIdade();
        let acreAno = calcularPorAno();
       
        setAcrecimoIdade(acrecismoIdade)
        setAcrecimoAno(acreAno)

        setValorFinal(VALOR_INCIAL + acrecismoIdade + acreAno)

    }

    function calcularPorIdade(){

        if(idade < 22){
            return VALOR_INCIAL * 0.20;
        }else if(idade >= 22 && idade <= 28){
            return VALOR_INCIAL * 0.18;
        }else{
            return VALOR_INCIAL * -0.15;
        }
    }

    function calcularPorAno(){
        if(ano < 2000){
            return VALOR_INCIAL * 0.3
        }else  if(ano >= 2000 && ano <= 2009 ){
            return VALOR_INCIAL * 0.15
        }else  if(ano >= 2016 ){
            return VALOR_INCIAL * -0.10
        }

    }

    function limparSimulacao(){
        setNome('')
        setCarro('')
        setIdade(0)
        setAno(0)
        setValorFinal(VALOR_INCIAL)
        setAcrecimoIdade(0)
        setAcrecimoAno(0)
        
    }

    return(
        <View style={styles.container}>
        <StatusBar style="auto" />
      
        <Header> SIMULACAR </Header>
      
        <View>
                <Input label="Nome" valueState={nome} changeText={setNome}/>
                <Input label="Carro" valueState={carro} changeText={setCarro}/>
             
                <View style={styles.containerInput}>
                    <Input styleInput={styles.inputSide} label="Idade" valueState={idade} changeText={setIdade}/>
                    <Input styleInput={styles.inputSide} label="Ano" valueState={ano} changeText={setAno}/>
                </View>
                
              <TouchableOpacity style={styles.buttonCalculate} 
                onPress={calcularSimulacao}>
                <Text style={styles.textButton}>Calcular</Text>
              </TouchableOpacity>
        </View>

        <View>
            <View style={styles.caixaIdade}>
                <Text style={styles.textCaixa1}>valor por idade</Text>
                <Text style={styles.textCaixa2}>R$ {acrecimoIdade.toFixed(2)}</Text>
            </View>
            <View style={styles.caixaAno} >
                <Text style={styles.textCaixa1}>valor por Ano</Text>
                <Text style={styles.textCaixa2}>R$ {acrecimoAno.toFixed(2)}</Text>
            </View>
            <View style={styles.caixaFinal}>
                <Text style={styles.textCaixa1}>Valor do seguro anual é</Text>
                <Text style={styles.textCaixa2}>R$ {valorFinal.toFixed(2)}</Text>
            </View>
        </View>

        <TouchableOpacity style={styles.buttonLimpar} 
            onPress={limparSimulacao}>
                <Text style={styles.textButton}>Limpar</Text>
        </TouchableOpacity>
    </View>
    )
}