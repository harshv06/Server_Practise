import {
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1, margin: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Pressable onPress={()=>navigation.goBack()}>
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
                marginLeft: "37%",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Log in
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
              />
            </Pressable>
          </View>

          <Text
            style={{
              color: "#006A55",
              marginTop: 20,
              marginHorizontal: 10,
              fontSize: 16,
            }}
          >
            Forgot Password ?
          </Text>

          <View style={{ position: "absolute", bottom: "5%" }}>
            <Text style={{ marginVertical: "7%" }}>
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
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
            >
              <Text style={{ fontSize: 22, color: "#fff" }}>Log in</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
