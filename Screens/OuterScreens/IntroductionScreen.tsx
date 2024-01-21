import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IntroductionScreen = () => {
    const sliderData=[
        {
            id:'1',
            url:require('../../assets/Shirt1.png'),
            text:'We are here for you !'
        },
        {
            id:'2',
            url:require('../../assets/foldedClothes.png'),
            text:'We are here for you !'
        },
        {
            id:'3',
            url:require('../../assets/ironClothes.png'),
            text:'We are here for you !'
        },
        {
            id:'4',
            url:require('../../assets/Tshirt1.png'),
            text:'We are here for you !'
        },
        {
            id:'4',
            url:require('../../assets/sneakers.png'),
            text:'We are here for you !'
        }
    ]
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
        <View style={{alignItems:'center',marginTop:"10%"}}>
        <Image source={require("../../assets/Logo.png")}/>
        </View>

        <View style={{backgroundColor:'black',height:'60%',marginTop:10}}>

        </View>

        <View style={{alignItems:"center",marginTop:'5%'}}> 
            <Pressable style={{backgroundColor:'#006A55',padding:15,borderRadius:30,width:'50%'}}>
                <Text style={{color:'#fff',fontSize:16,textAlign:'center'}}>Create Account</Text>
            </Pressable>

            <View style={{flexDirection:'row',marginTop:'5%'}}>
                <Text style={{fontSize:16,color:'#000'}}>Have an Account? </Text>
                <Pressable>
                    <Text style={{fontSize:16,color:'#006A55'}}>
                        Log in
                    </Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default IntroductionScreen

const styles = StyleSheet.create({})