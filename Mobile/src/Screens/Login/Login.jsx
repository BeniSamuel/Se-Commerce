import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // loading fonts
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
    <View className="bg-white px-3 flex-col flex-1 gap-20 pt-4">
      <View>
        <Text className="text-lg">Hi there,</Text>
        <Text className="text-lg">Welcome to SE-Commerce</Text>
      </View>

      <View className="flex-col gap-y-9">
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          className="border-2 border-black py-4 rounded-xl pl-5 placeholder:text-lg"
        />

        <View className="relative">
          <TextInput
            secureTextEntry={!showPassword}
            placeholder="Password"
            className="border-2 border-black py-4 rounded-xl pl-5 placeholder:text-lg"
          />
          {/* Wrap Image in TouchableOpacity for press functionality */}
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            className="absolute right-5 top-6"
          >
            <Image
              source={
                showPassword
                  ? require("../../../assets/Icons/EyeOpen.png")
                  : require("../../../assets/Icons/EyeClosed.png")
              }
              style={{ width: 24, height: 24 }} // Ensure the image fits well
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TabNavigator");
          }}
          className="bg-black py-5 rounded-xl flex-row justify-center items-center"
        >
          <Text className="text-white text-xl">Login</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-col h-32 justify-between ">
        <View className="flex-row justify-between items-center">
          <View className="bg-black w-32 h-[1px]"></View>
          <Text>Or</Text>
          <View className="bg-black w-32 h-[1px]"></View>
        </View>
        <TouchableOpacity className="border-2 border-black py-5 rounded-xl flex-row pl-5 items-center">
          <Image source={require("../../../assets/Icons/Google.png")} />
          <Text style={styles.text}> Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins-medium",
  },
});
