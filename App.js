import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { AppLoading } from "expo";

import * as Font from "expo-font";
import Account from "./src/screens/Account";
import SignUp from "./src/screens/SignUp";
import Accounttype from "./src/screens/Accounttype";
import Email from "./src/screens/Email";
import Home from "./src/screens/Home";
import AccountPage from "./src/screens/AccountPage";
import Notifications from "./src/screens/Notifications";
import Stats from "./src/screens/Stats";
import Verifycode from "./src/screens/Verifycode";

const StackNavigation = createStackNavigator(
  {
    // DrawerNavigation: {
    //   screen: DrawerNavigation,
    // },
    // Account: Account,
    SignUp: SignUp,
    LogIn: Account,
    Home: Home,
    Notifications: Notifications,
    Stats: Stats,
    Account: AccountPage,
    // Accounttype: Accounttype,
    // Email: Email,
    // Home: Home,
    // LogIn: LogIn,
    // Notifications: Notifications,
    // Stats: Stats,
    // Verifycode: Verifycode,
    // WizardSignUp: WizardSignUp,
  },
  {
    headerMode: "none",
    initialRouteName: "Account",
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
      anticon: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/AntDesign.ttf"),
      "poppins-regular": require("./src/assets/fonts/poppins-regular.ttf"),
      "poppins-600": require("./src/assets/fonts/poppins-600.ttf"),
      "poppins-500": require("./src/assets/fonts/poppins-500.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "poppins-700": require("./src/assets/fonts/poppins-700.ttf"),
    }),
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
