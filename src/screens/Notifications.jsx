import React, { Component, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import Navigation from "../components/Navigation";
import Wizard from "react-native-wizard";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Swiper from "react-native-swiper";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";
import NewNotification from "../components/notificationPageComponent/NewNotification";
import OldNotification from "../components/notificationPageComponent/OldNotification";
import Pagination from "../components/Pagination";

function Notifications({ navigation }) {
  const wizard = useRef();
  const [isFirstStep, setIsFirstStep] = useState();
  const [isLastStep, setIsLastStep] = useState();
  const stepList = [
    {
      content: <Text> STEP ssss ONE</Text>,
    },
    {
      content: <Text> STEP TWO</Text>,
    },
    {
      content: <Text> STEP THREE</Text>,
    },
  ];

  const newNotificationArr = [
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
  ];

  const oldNotificationArr = [
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
  ];

  let customStyle = {
    backgroundColor: "rgba(244,244,244,1)",
    height: 16,
    flexDirection: "row",
    marginLeft: 39,
    marginRight: -1,
    justifyContent: "space-between",
  };

  const newNotificationsItem = newNotificationArr.map((item) => (
    <View>
      <OldNotification
        title={item.title}
        name={item.name}
        date={item.date}
      ></OldNotification>
      <MaterialCommunityIconsIcon
        name="bank-transfer-out"
        style={styles.icon7}
      ></MaterialCommunityIconsIcon>
    </View>
  ));

  const oldNotificationsItem = oldNotificationArr.map((item) => (
    <View style={{ marginLeft: 20, marginRight: 20, paddingBottom: 10 }}>
      <OldNotification
        key={item.toString()}
        title={item.title}
        name={item.name}
        date={item.date}
      ></OldNotification>
      <MaterialCommunityIconsIcon
        key={(item * 100000).toString()}
        name="bank-transfer-out"
        style={styles.icon7}
      ></MaterialCommunityIconsIcon>
    </View>
  ));

  return (
    <>
      <CupertinoSearchBarBasic
        inputBox="#EFEFF4"
        style={styles.cupertinoSearchBarBasic}
      ></CupertinoSearchBarBasic>

      <View style={{ height: 20, marginTop: 20, marginLeft: 20 }}>
        <Text
          style={{
            fontFamily: "poppins-regular",
            color: "#121212",
            fontSize: 12,
            opacity: 0.5,
          }}
        >
          New
        </Text>
      </View>

      <WizEx></WizEx>
      <View style={{ height: 20, marginLeft: 20, marginBottom: 20 }}>
        <Text
          style={{
            fontFamily: "poppins-regular",
            color: "#121212",
            fontSize: 12,
            opacity: 0.5,
          }}
        >
          Seen
        </Text>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {oldNotificationsItem}
        </ScrollView>
      </SafeAreaView>
      <Navigation navigation={navigation}></Navigation>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: 350 },

  scrollView: {
    marginBottom: 20,
  },
  text: {
    fontSize: 42,
  },

  scrollArea: {
    width: 335,
    height: 307,

    marginLeft: 20,
  },
  scrollArea_contentContainerStyle: {
    height: 718,
    width: 335,
  },
  navigation: {
    width: 375,
    height: 83,
    marginTop: 729,
    alignSelf: "center",
  },
  // text: {
  //   fontFamily: "poppins-600",
  //   color: "rgba(36,108,166,1)",
  //   fontSize: 22,
  //   marginTop: -752,
  //   marginLeft: 20,
  // },
  newNotification: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 45,
    width: 335,
  },
  icon3: {
    top: 6,
    left: 7,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
  },
  newNotificationStack: {
    width: 335,
    height: 45,
    marginTop: 102,
    marginLeft: 20,
  },
  scrollArea: {
    width: 317,
    height: 240,
    marginTop: 209,
    marginLeft: 20,
  },
  scrollArea_contentContainerStyle: {
    height: 240,
    width: 317,
  },
  oldNotification: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 317,
  },
  icon7: {
    top: 2,
    left: 2,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
    height: 33,
    width: 30,
  },
  oldNotificationStack: {
    width: 317,
    height: 36,
  },
  oldNotification2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 317,
  },
  icon6: {
    top: 2,
    left: 2,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
    height: 33,
    width: 30,
  },
  oldNotification2Stack: {
    width: 317,
    height: 36,
    marginTop: 14,
  },
  oldNotification3: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 317,
  },
  icon8: {
    top: 2,
    left: 2,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
    height: 33,
    width: 30,
  },
  oldNotification3Stack: {
    width: 317,
    height: 36,
    marginTop: 15,
  },
  oldNotification4: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 317,
  },
  icon9: {
    top: 1,
    left: 2,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
    height: 33,
    width: 30,
  },
  oldNotification4Stack: {
    width: 317,
    height: 36,
    marginTop: 16,
  },
  oldNotification5: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 317,
  },
  icon5: {
    top: 2,
    left: 2,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
    height: 33,
    width: 30,
  },
  oldNotification5Stack: {
    width: 317,
    height: 36,
    marginTop: 14,
  },
  newNotification2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 45,
    width: 335,
  },
  icon4: {
    top: 6,
    left: 7,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
  },
  newNotification2Stack: {
    width: 335,
    height: 45,
    marginTop: -444,
    marginLeft: 20,
  },
  newNotification3: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 45,
    width: 335,
  },
  icon2: {
    top: 6,
    left: 7,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
  },
  newNotification3Stack: {
    width: 335,
    height: 45,
    marginTop: 6,
    marginLeft: 20,
  },
  newNotification4: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 45,
    width: 335,
  },
  icon: {
    top: 5,
    left: 7,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
  },
  newNotification4Stack: {
    width: 335,
    height: 45,
    marginTop: 5,
    marginLeft: 20,
  },
  new5: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 12,
    opacity: 0.5,
    marginTop: -215,
    marginLeft: 20,
  },
  cupertinoSearchBarBasic: {
    width: 375,
    paddingTop: 86,
    alignSelf: "center",
  },
  pagination: {
    width: 49,
    height: 10,
    marginTop: 253,
    marginLeft: 154,
  },
  seen: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 12,
    opacity: 0.5,
    marginTop: 10,
    marginLeft: 20,
  },
});

const WizEx = () => {
  const newNotificationArr = [
    {
      title: "Transfer sent",
      name: "Bruce Wayne",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne1",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne2",
      date: "27/07/2020",
    },
    {
      title: "Transfer sent",
      name: "Bruce Wayne3",
      date: "27/07/2020",
    },
  ];

  const styles = StyleSheet.create({
    wrapper: {
      paddingTop: 0,
      height: 220,
    },
    slide1: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#9DD6EB",
    },
    icon7: {
      top: 2,
      left: 2,
      position: "absolute",
      color: "rgba(36,108,166,1)",
      fontSize: 30,
      height: 33,
      width: 30,
    },
    slide2: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#97CAE5",
    },
    slide3: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#92BBD9",
    },
    text: {
      color: "#fff",
      fontSize: 30,
      fontWeight: "bold",
    },
  });

  const newNotificationsItem = newNotificationArr.map((item) => (
    <View style={{ marginLeft: 20, marginRight: 20, paddingBottom: 10 }}>
      <OldNotification
        title={item.title}
        name={item.name}
        date={item.date}
      ></OldNotification>
      <MaterialCommunityIconsIcon
        name="bank-transfer-out"
        style={styles.icon7}
      ></MaterialCommunityIconsIcon>
    </View>
  ));

  return (
    <Swiper
      style={styles.wrapper}
      paginationStyle={{ marginTop: 0, paddingTop: 0 }}
      loop={false}
    >
      <View style={{ marginTop: 30 }}>{newNotificationsItem}</View>
      <View style={{ marginTop: 30 }}>{newNotificationsItem}</View>
      <View style={{ marginTop: 30 }}>{newNotificationsItem}</View>
    </Swiper>
  );
};

export default Notifications;
