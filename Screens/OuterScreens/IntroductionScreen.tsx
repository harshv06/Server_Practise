import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";

const IntroductionScreen = () => {
  const sliderData = [
    {
      id: "1",
      url: require("../../assets/shirts2.png"),
      text: "Personalized Laundry Experience",
      tagLine: "Tailored just for you - because your laundry needs are unique!",
    },
    {
      id: "2",
      url: require("../../assets/tie.png"),
      text: " Eco-Friendly Practices",
      tagLine:
        "Laundry with a conscience, because every wash makes a difference!",
    },
    {
      id: "3",
      url: require("../../assets/Shirt1.png"),
      text: "Secure and Reliable Service",
      tagLine: "Your laundry, our responsibility!",
    },
    {
      id: "4",
      url: require("../../assets/Tshirt1.png"),
      text: "Exclusive Offers",
      tagLine: "Enjoy exclusive perks",
    },
    {
      id: "4",
      url: require("../../assets/sneakers.png"),
      text: "24/7 Support for Your Convenience",
      tagLine: "We've got your back, anytime, anywhere!",
    },
  ];

  const [index,setIndex]=useState(0)
  const isRef=useRef(null)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ alignItems: "center", marginTop: "10%" }}>
        <Image source={require("../../assets/Logo.png")} />
      </View>

      <View style={{ height: "60%", marginTop: '10%' }}>
        <Carousel
          data={sliderData}
          renderItem={({ item, index }) => {
            return (
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                  source={item.url}
                  style={{ height: "60%", width: "100%" }}
                  resizeMode="contain"
                />
                <View style={{ margin: 20,alignItems:"center" }}>
                  <Text style={{ fontSize: 22, fontWeight: "600" }}>
                    {item.text}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      textAlign: "center",
                      marginTop:20
                    }}
                  >
                    {item.tagLine}
                  </Text>
                </View>
              </View>
            );
          }}
          bounces={false}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width}
          pagingEnabled={false}
          ref={isRef}
          onSnapToItem={(x)=>setIndex(x)}
          useScrollView={true}
        />

        <Pagination
        dotsLength={sliderData.length}
        activeDotIndex={index}
        dotStyle={{backgroundColor:'#006A55'}}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: "10%" }}>
        <Pressable
          style={{
            backgroundColor: "#006A55",
            padding: 15,
            borderRadius: 30,
            width: "50%",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>
            Create Account
          </Text>
        </Pressable>

        <View style={{ flexDirection: "row", marginTop: "5%" }}>
          <Text style={{ fontSize: 16, color: "#000" }}>Have an Account? </Text>
          <Pressable>
            <Text style={{ fontSize: 16, color: "#006A55" }}>Log in</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({});
