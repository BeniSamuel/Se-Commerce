import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // Fixed typo here
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../Home/Home";
import Explore from "../Explore/Explore";
import Favourites from "../Favourites/Favourites";
import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";

// Importing icons

import homeIcon from '../../../assets/Icons/Home_Focused.png';
import exploreIcon from '../../../assets/Icons/Explore.png';
import favouritesIcon from '../../../assets/Icons/Favourites.png';
import cartIcon from '../../../assets/Icons/cart.png';
import profileIcon from '../../../assets/Icons/Profile.png';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({route})=>{
            tabBarIcon: ({ focused, color, size}) => {
                let iconName;

                if (route.name == "Home") {
                    iconName = focused ? homeIcon : only   
                }
                else if (route.name == "Explore") {
                    iconName = focused ? only : exploreIcon;
                }
                else if (route.name == "Favourites") {
                    iconName = focused ? any : favouritesIcon;
                }
                else if (route.name == "Cart") {
                    iconName = focused ? any : cartIcon;
                }
                else if (route.name == "Profile") {
                    iconName = focused ? any : profileIcon
                }
                return (
                    <Image
                    source={iconName}
                    // style={{ width: size, height: size, tintColor: color }}
                  />
                ) 
            }
        }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
