import React, { useEffect, useState } from "react";
import {View,StyleSheet,Text,SafeAreaView, FlatList, ScrollView, TouchableOpacity,StatusBar} from 'react-native'
import Article from "../Components/Article";
import axios from 'axios';
const General =({navigation})=>{
    let b = StatusBar.currentHeight;
    const [articles,setArticles]=useState([]);
    const getNews=()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=b62d3a3312454f5cbb17afe109318a3e')
  .then((response) =>{
    // handle success
    setArticles(response.data.articles)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}
useEffect(()=>{
    getNews();

},[]);
    return(
        <View style={{marginTop:b}}>
        <ScrollView>
        <View style={Styles.container}>
            <View style={{backgroundColor:"lightblue",marginBottom:10,margingLeft:20,marginRight:10,borderRadius:10}}>
            <Text style={{textAlign:"center",fontWeight:"500",fontSize:28}}>NEWS APP</Text>
            </View>
            <FlatList
            data={articles}
            renderItem={({item})=> 
                <Article 
                urlToimage = {item.urlToImage}
                title={item.title}
                description={item.description}
                author = {item.authorpublishedAt}
                sourceName = {item.source.name}
            
            />}
            keyExtractor = {(item)=>item.title}
            />
            <View style={Styles.last}>
            <TouchableOpacity
                onPress={()=>navigation.navigate('HomeScreen')}
                >
                <Text style={Styles.sport}>Tech</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                onPress={()=>navigation.navigate('Entertainment')}
                >
                <Text style={Styles.science}>Movies</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>navigation.navigate('Science')}
                >
                <Text style={Styles.science}>Science</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate('General')}
                >
                <Text style={Styles.science}>General</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
        </View>
    )
};
const Styles = StyleSheet.create({
    last:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"lightblue",
        marginTop:10,
        height:50,
        marginLeft:20,
        marginRight:20,
        borderRadius:15,
        marginBottom:10
    },
    sport:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:10,
        marginTop:8
    },
    tech:{
        fontSize:18,
        fontWeight:"bold",
        marginTop:8
    },
    science:{
        fontSize:18,
        fontWeight:"bold",
        marginRight:10,
        marginTop:8
    }
})
export default General;