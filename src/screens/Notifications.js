import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Navigation from "../components/Navigation";
import NewNotification from "../components/NewNotification";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import OldNotification from "../components/OldNotification";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";
import Pagination from "../components/Pagination";

function Notifications(props) {
  return (
    <View style={styles.container}>
      <Navigation style={styles.navigation}></Navigation>
      <Text style={styles.text}>Notifications</Text>
      <View style={styles.newNotificationStack}>
        <NewNotification
          name="Bruce Wayne"
          title="Transfer receipt"
          ddMmYyyy="10/08/2020"
          style={styles.newNotification}
        ></NewNotification>
        <MaterialCommunityIconsIcon
          name="bank-transfer-in"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.oldNotificationStack}>
            <OldNotification
              name5="Name"
              title5="Transfer sent"
              name5="Bruce Wayne"
              ddMmYyyy4="27/07/2020"
              style={styles.oldNotification}
            ></OldNotification>
            <MaterialCommunityIconsIcon
              name="bank-transfer-out"
              style={styles.icon7}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.oldNotification2Stack}>
            <OldNotification
              title5="Transfer sent"
              name5="John Snaow"
              ddMmYyyy4="22/07/2020"
              style={styles.oldNotification2}
            ></OldNotification>
            <MaterialCommunityIconsIcon
              name="bank-transfer-out"
              style={styles.icon6}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.oldNotification3Stack}>
            <OldNotification
              title5="Direct Debit"
              name5="Netflix"
              ddMmYyyy4="13/07/2020"
              style={styles.oldNotification3}
            ></OldNotification>
            <MaterialCommunityIconsIcon
              name="bank-transfer"
              style={styles.icon8}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.oldNotification4Stack}>
            <OldNotification
              title5="Transfer receipt"
              name5="Arya Stark"
              ddMmYyyy4="21/06/2020"
              style={styles.oldNotification4}
            ></OldNotification>
            <MaterialCommunityIconsIcon
              name="bank-transfer-in"
              style={styles.icon9}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.oldNotification5Stack}>
            <OldNotification
              title5="Transfer sent"
              name5="Jaime Lannister"
              ddMmYyyy4="19/06/2020"
              style={styles.oldNotification5}
            ></OldNotification>
            <MaterialCommunityIconsIcon
              name="bank-transfer-out"
              style={styles.icon5}
            ></MaterialCommunityIconsIcon>
          </View>
        </ScrollView>
      </View>
      <View style={styles.newNotification2Stack}>
        <NewNotification
          name="Tony Stark"
          title="Transfer receipt"
          ddMmYyyy="10/08/2020"
          style={styles.newNotification2}
        ></NewNotification>
        <MaterialCommunityIconsIcon
          name="bank-transfer-in"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.newNotification3Stack}>
        <NewNotification
          name="Mycrosoft"
          title="Direct Debit"
          ddMmYyyy="09/08/2020"
          style={styles.newNotification3}
        ></NewNotification>
        <MaterialCommunityIconsIcon
          name="bank-transfer"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.newNotification4Stack}>
        <NewNotification
          name="Diana Prince"
          title="Transfer sent"
          ddMmYyyy="09/08/2020"
          style={styles.newNotification4}
        ></NewNotification>
        <MaterialCommunityIconsIcon
          name="bank-transfer-out"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
      </View>
      <Text style={styles.new5}>New</Text>
      <CupertinoSearchBarBasic
        inputBox="#EFEFF4"
        style={styles.cupertinoSearchBarBasic}
      ></CupertinoSearchBarBasic>
      <Pagination style={styles.pagination}></Pagination>
      <Text style={styles.seen}>Seen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigation: {
    width: 375,
    height: 83,
    marginTop: 729,
    alignSelf: "center"
  },
  text: {
    fontFamily: "poppins-600",
    color: "rgba(36,108,166,1)",
    fontSize: 22,
    marginTop: -752,
    marginLeft: 20
  },
  newNotification: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 45,
    width: 335
  },
  icon3: {
    top: 6,
    left: 7,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30
  },
  newNotificationStack: {
    width: 335,
    height: 45,
    marginTop: 102,
    marginLeft: 20
  },
  scrollArea: {
    width: 317,
    height: 240,
    marginTop: 209,
    marginLeft: 20
  },
  scrollArea_contentContainerStyle: {
    height: 240,
    width: 317
  },
  oldNotification: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 317
  },
  icon7: {
    top: 2,
    left: 2,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  oldNotificationStack: {
    width: 317,
    height: 36
  },
  oldNotification2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 317
  },
  icon6: {
    top: 2,
    left: 2,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  oldNotification2Stack: {
    width: 317,
    height: 36,
    marginTop: 14
  },
  oldNotification3: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 317
  },
  icon8: {
    top: 2,
    left: 2,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  oldNotification3Stack: {
    width: 317,
    height: 36,
    marginTop: 15
  },
  oldNotification4: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 317
  },
  icon9: {
    top: 1,
    left: 2,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  oldNotification4Stack: {
    width: 317,
    height: 36,
    marginTop: 16
  },
  oldNotification5: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 317
  },
  icon5: {
    top: 2,
    left: 2,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  oldNotification5Stack: {
    width: 317,
    height: 36,
    marginTop: 14
  },
  newNotification2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 45,
    width: 335
  },
  icon4: {
    top: 6,
    left: 7,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30
  },
  newNotification2Stack: {
    width: 335,
    height: 45,
    marginTop: -444,
    marginLeft: 20
  },
  newNotification3: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 45,
    width: 335
  },
  icon2: {
    top: 6,
    left: 7,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30
  },
  newNotification3Stack: {
    width: 335,
    height: 45,
    marginTop: 6,
    marginLeft: 20
  },
  newNotification4: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 45,
    width: 335
  },
  icon: {
    top: 5,
    left: 7,
    position: "absolute",
    color: "rgba(36,108,166,1)",
    fontSize: 30
  },
  newNotification4Stack: {
    width: 335,
    height: 45,
    marginTop: 5,
    marginLeft: 20
  },
  new5: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 12,
    opacity: 0.5,
    marginTop: -215,
    marginLeft: 20
  },
  cupertinoSearchBarBasic: {
    height: 44,
    width: 375,
    marginTop: -86
  },
  pagination: {
    width: 49,
    height: 10,
    marginTop: 253,
    marginLeft: 154
  },
  seen: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 12,
    opacity: 0.5,
    marginTop: 10,
    marginLeft: 20
  }
});

export default Notifications;
