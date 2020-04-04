// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import { materialCommunityIcons } from "react-native-vector-icons";

// import RestaurantsScreen from "../screens/Restaurants";
// import topRestaurantsScreen from "../screens/TopRestaurants";
// import Search from "../screens/Search";
// import MyAccount from "../screens/MyAccount";
// import { StackActions } from "react-navigation";

// const Tab = createBottomTabNavigator();
// const stack = createStackNavigator();

// function RestaurantsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Restaurantes" component={RestaurantsScreen} />
//       <Stack.Screen name="Restaurante" component={RestaurantsScreen} />
//     </Stack.Navigator>
//   );
// }
// function TopRestaurantsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Top 5" component={topRestaurantsScreen} />
//     </Stack.Navigator>
//   );
// }

// export default function Navigation() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Restaurantes"
//           component={topRestaurantsScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <materialCommunityIcons name="Home" color={color} size={size} />
//             )
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
