import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const StarterScreen = () => {
    const Navigation=useNavigation()
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        marginTop: Platform.OS == "android" ? 0 : 0,
      }}
    >
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../assets/background.png")}
        resizeMode="cover"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "25%",
          }}
        >
          <Image source={require("../../assets/LogoPNG.png")} />
        </View>
        <Pressable
          style={{
            position: "absolute",
            bottom: "5%",
            alignSelf: "center",
            backgroundColor: "#fff",
            padding: 15,
            width: "85%",
            borderRadius: 30,
          }}
          onPress={()=>Navigation.navigate('Intro')}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 18 }}
          >
            Get Started
          </Text>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default StarterScreen;

const styles = StyleSheet.create({});
