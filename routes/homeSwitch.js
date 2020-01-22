import { createSwitchNavigator } from "react-navigation";
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

export default createSwitchNavigator(screens, options);
