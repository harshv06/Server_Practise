import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {

  const [data,setData]=useState({
    email:'',
    password:'',
    cPassword:''
  })

  const handlePress=()=>{
    // if(!email || !password ||cPassword){
    //   console.log("Please Fill All Fields")
    //   return
    // }
    fetch('http://192.168.0.107:3000/auth/sendOTP',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then(res=>res.json()).then((data)=>{
      if(data){
        console.log(data)
      }
    })
  }

    const navigation=useNavigation()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView style={{ flex: 1, margin: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-outline"
              size={24}
              color="black"
              style={{ marginVertical: 20 }}
            />
          </Pressable>
          <Text
            style={{
              marginVertical: 20,
              alignSelf: "center",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Register
          </Text>
        </View>

        <View style={{ marginTop: "5%" }}>
          <Pressable
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#e3e5e5",
              padding: 5,
            }}
          >
            <Text style={{ marginHorizontal: 10 }}>Email</Text>
            <TextInput
              style={{ marginHorizontal: 10, height: 25 }}
              placeholder="username@gmail.com"
              onChangeText={(text)=>setData({...data,email:text})}
              value={data.email}
              keyboardType="email-address"
            />
          </Pressable>

          <Pressable
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#e3e5e5",
              padding: 5,
              marginTop: 20,
            }}
          >
            <TextInput
              style={{ marginHorizontal: 10, padding: 5, height: 40 }}
              placeholder="Password"
              onChangeText={(text)=>setData({...data,password:text})}
              value={data.password}
            />
          </Pressable>

          <Pressable
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#e3e5e5",
              padding: 5,
              marginTop: 20,
            }}
          >
            <TextInput
              style={{ marginHorizontal: 10, padding: 5, height: 40 }}
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={(text)=>setData({...data,cPassword:text})}
              value={data.cPassword}
            />
          </Pressable>
        </View>

        <View style={{ position: "absolute", bottom: "5%" }}>
          <Text style={{ marginVertical: "7%" }}>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </Text>

          <Pressable
            style={{
              backgroundColor: "#006A55",
              width: "95%",
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 50,
              padding: 10,
            }}
            onPress={()=>navigation.navigate('OTPScreen',{data:"1234"})}
          >
            <Text style={{ fontSize: 22, color: "#fff" }}>Register</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
