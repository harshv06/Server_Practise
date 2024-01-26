import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Ionicons } from "@expo/vector-icons";

const OTPScreen = ({ route }) => {
  const [btn, setBtn] = useState(false);
  const [userCode, setUserCode] = useState("");
  const [actualCode, setActualCode] = useState("");
  const { data } = route.params;
  useEffect(() => {
    setActualCode(data);
  }, []);

  const checkCode=()=>{
    if(actualCode==userCode){
        Alert.alert("Success","User Verified Successfully",[{text:'Ok'}])
    }
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior="padding"
    >
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#fff", marginHorizontal: 25 }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
              fontSize: 20,
              color: "#006A55",
              fontWeight: "600",
            }}
          >
            Change email
          </Text>
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: "600", color: "#090A0A" }}>
            Enter authentication code
          </Text>
          <Text
            style={{
              textAlign: "center",
              marginTop: 10,
              fontSize: 16,
              color: "#090A0A",
              fontWeight: "500",
            }}
          >
            Enter the 4-digit that we have sent via the email xyz@gmail.com
          </Text>
        </View>
        <OTPInputView
          style={{ width: "90%", height: 100, alignSelf: "center" }}
          pinCount={6}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={{
            borderRadius: 100,
            marginTop: 20,
            color: "#090A0A",
          }}
          codeInputHighlightStyle={{ borderColor: "#006A55" }}
          onCodeFilled={(code) => {
            setBtn(true);
            setUserCode(code);
          }}
          keyboardType="phone-pad"
        />
        <View
          style={{
            position: "absolute",
            bottom: "5%",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Pressable
            style={
              btn
                ? {
                    backgroundColor: "#006A55",
                    width: "90%",
                    padding: 12,
                    borderRadius: 50,
                  }
                : {
                    backgroundColor: "#E3E5E5",
                    width: "90%",
                    padding: 12,
                    borderRadius: 50,
                  }
            }
            disabled={btn}
            onPress={()=>checkCode()}
          >
            <Text
              style={{
                textAlign: "center",
                color: btn ? "#fff" : "#000",
                fontWeight: "600",
                fontSize: 18,
                opacity: btn ? 1 : 0.4,
              }}
            >
              Continue
            </Text>
          </Pressable>

          <Pressable style={{ marginTop: 10 }}>
            <Text style={{ color: "#006A55", fontSize: 18, fontWeight: "500" }}>
              Resend code
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({});
