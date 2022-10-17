import React from "react";
import {View,StyleSheet,Text,SafeAreaView,Image, TouchableOpacity} from 'react-native'
const Article =(props)=>{
    return(
            <View style={styles.container}>
               
            <Image source={{uri:props.urlToimage}} style={styles.image}/>
            
            {/*Text*/}
            <View style={{padding:20}}>
            <Text style={styles.title}>{props.title}</Text>

            {/* description*/}
            <Text style={styles.description} numberOfLines={6}>{props.description}</Text>

            <View style={styles.data}>
                <Text style={styles.heading}>by: <Text style={styles.value}>{props.author}</Text></Text>
                <Text style={styles.date}>{props.publishedAt}</Text>
            </View>
            {/* Source*/}
            <View style={{marginTop:10}}>
            <Text>
                source: <Text style={styles.source}>{props.sourceName}</Text>
            </Text>
            </View>
           
            </View>
            </View>
    )
};
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:200,
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    container:{
        width:"90%",
        alignSelf:"center",
        borderRadius:40,
        shadowOpacity:0.5,
        shadowColor:"#000",
        shadowOffset:{
            width:5,
            height:5
        },
        backgroundColor:"#fff",
        borderColor:"black",
        borderWidth:2,
        marginBottom:15
    },
    title:{
       fontSize:18,
       fontWeight:"600",
       marginTop:10,
       flexWrap:"wrap"
    },
    description:{
        fontSize:16,
        fontWeight:"400",
        marginTop:10
    },
    data:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10
    },
    heading:{

    },
    value:{
        fontWeight:"bold"
    },
    date:{
        fontWeight:"bold",
        color:"#e63946",
        fontSize:15
    },
    source:{
        color:"#e63946",
        fontWeight:"bold",
        fontSize:15,
    }

});
export default Article;