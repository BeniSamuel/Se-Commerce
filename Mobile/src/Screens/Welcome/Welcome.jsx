import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";

const Welcome = ({ navigation }) => {
  //  loading fonts
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
    "poppins-black": require("../../../assets/fonts/Poppins-Black.ttf"),
    "poppins-bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
    "poppins-light": require("../../../assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("../../../assets/fonts/Poppins-Medium.ttf"),
  });

  // checking if fonts loaded
  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // rendering ui
  return (
    <View className=" flex-col items-center justify-center flex-1 gap-6">
      <View>
        <Text className=" font-medium text-lg" style={styles.text}>
          Welcome to Product System
        </Text>
      </View>
      <View>
        <TouchableOpacity
          className=" bg-black px-12 py-3 rounded-xl"
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text className=" text-white" style={styles.text}>
            Join
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  text: {
    fontFamily: "poppins-medium",
  },
});
