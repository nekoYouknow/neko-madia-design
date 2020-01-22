import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Admin from "../screens/admin";

const screens = {
  Home: {
    screen: Home
  },
  Admin: {
    screen: Admin
  }
};

const options = {
  headerMode: "none"
};

export default createStackNavigator(screens, options);
