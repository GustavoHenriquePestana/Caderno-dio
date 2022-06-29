import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking } from 'react-native';

const color1 = '#010409';
const imageProfile = 'https://avatars.githubusercontent.com/u/104945551?v=4';
const colorGit = '#C9D1D9';
const colorDarkGit = '#4F565E';
const urlGithub = 'https://github.com/GustavoHenriquePestana';


const App = () =>{

    const handlePressGithub = async () =>{
        const res = await Linking.canOpenURL(urlGithub);
        if(res){
            await Linking.openURL(urlGithub);
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={color1} barStyle='dark-content'/>
            <View>
               <image style={style.avatar}source= {{uri: imageProfile }}/> 
               <Text accessibilityLabel="Nome: Gustavo Henrique Pestana" style={[style.defaultText, style.name]}>Gustavo Henrique Pestana</Text>
               <Text accessibilityLabel="NickName: GustavoHenriquePestana"  style={[style.defaultText, style.nickname]}>GustavoHenriquePestana</Text>
               <Text accessibilityLabel="Descrição: Codando em busca do conhecimento" style={[style.defaultText, style.description]}>Codando em busca do conhecimento</Text>
            </View>
            <Pressable onPress={handlePressGithub}>
                <View>
                    <Text style={[style.button, style.defaultText, ]}>Open the GitHub</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: color1,
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorGit,
    },
    name: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
    },
    nickname:{
        fontSize: 18,
        color: colorDarkGit,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',

    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkGit,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});