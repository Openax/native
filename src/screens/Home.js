import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Navigation from "../components/Navigation";
import List from "../components/homePageComponents/List";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import InvertedHalfButton from "../components/InvertedHalfButton";
import HalfButton from "../components/HalfButton";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function Home(props) {
  const listOfitems = [
    {
      name: "Sony Playstation",
      date: "16/09/2020",
    },
    {
      name: "Sony Playstation1",
      date: "17/09/2020",
    },
    {
      name: "Sony Playstation2",
      date: "18/09/2020",
    },
    {
      name: "Sony Playstation3",
      date: "19/09/2020",
    },
    {
      name: "Sony Playstation4",
      date: "20/09/2020",
    },
    {
      name: "Sony Playstation5",
      date: "21/09/2020",
    },
    {
      name: "Zboub",
      date: "21/09/2020",
    },
    {
      name: "Zboub2",
      date: "21/09/2020",
    },
    {
      name: "Zboub3",
      date: "21/09/2020",
    },
  ];

  const scrollListItems = listOfitems.map((item) => (
    <View key={item.toString()} style={styles.listStack}>
      <List name2={item.name} ddMmYyyy2={item.date} style={styles.list}></List>
      <IoniconsIcon name="logo-xbox" style={styles.icon6}></IoniconsIcon>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Navigation style={styles.navigation}></Navigation>
      <Text style={styles.heySteve}>Hey Steve!</Text>
      <View style={styles.account4ColumnRow}>
        <View style={styles.account4Column}>
          <Text style={styles.account4}>Account</Text>
          <Text style={styles.account3}>1829 9283 7262 1922</Text>
          <Text style={styles.iban}>IBAN</Text>
          <Text style={styles.gn01726222192293}>GN 01 726222 1922 93</Text>
        </View>
        <View style={styles.rect6}>
          <Text style={styles.balance}>Balance</Text>
          <View style={styles.loremIpsum2Row}>
            <Text style={styles.loremIpsum2}>$</Text>
            <Text style={styles.loremIpsum}>17,983.00</Text>
          </View>
        </View>
      </View>

      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          {scrollListItems}
        </ScrollView>
      </View>

      <Text style={styles.lastExpenses}>Last Expenses</Text>

      <View style={styles.invertedHalfButtonRow}>
        <InvertedHalfButton
          style={styles.invertedHalfButton}
        ></InvertedHalfButton>
        <HalfButton style={styles.halfButton}></HalfButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    height: 83,
    width: 375,
    marginTop: 729,
  },
  heySteve: {
    fontFamily: "poppins-600",
    color: "rgba(36,108,166,1)",
    fontSize: 22,
    marginTop: -752,
    marginLeft: 20,
  },
  account4: {
    fontFamily: "poppins-regular",
    color: "#121212",
    opacity: 0.5,
  },
  account3: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
    marginTop: 2,
  },
  iban: {
    fontFamily: "poppins-regular",
    color: "#121212",
    opacity: 0.5,
    marginTop: 11,
  },
  gn01726222192293: {
    fontFamily: "poppins-600",
    color: "rgba(49,49,49,1)",
    marginTop: 2,
  },
  account4Column: {
    width: 144,
    marginBottom: 6,
  },
  rect6: {
    width: 154,
    height: 105,
    backgroundColor: "rgba(36,108,166,1)",
    borderRadius: 10,
    marginLeft: 37,
  },
  balance: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 23,
    marginLeft: 21,
  },
  loremIpsum2: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
  },
  loremIpsum: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginLeft: 5,
  },
  loremIpsum2Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 21,
    marginRight: 17,
  },
  account4ColumnRow: {
    height: 105,
    flexDirection: "row",
    marginTop: 34,
    marginLeft: 20,
    marginRight: 20,
  },
  scrollArea: {
    width: 335,
    height: 307,
    marginTop: 83,
    marginLeft: 20,
  },
  scrollArea_contentContainerStyle: {
    // height: 718,
    width: 335,
  },
  list: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 42,
    width: 335,
  },
  icon6: {
    top: 5,
    left: 4,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  listStack: {
    width: 335,
    height: 42,
    marginBottom: 10,
  },
  list2: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon5: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list2Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list3: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon7: {
    top: 5,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list3Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list4: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon2: {
    top: 5,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list4Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list5: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list5Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list6: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon8: {
    top: 4,
    left: 4,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list6Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list7: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon9: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list7Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list8: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon10: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list8Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list9: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon11: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list9Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list11: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon12: {
    top: 4,
    left: 4,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list11Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list10: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon13: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list10Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list12: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon15: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list12Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list13: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon14: {
    top: 5,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list13Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list14: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon16: {
    top: 5,
    left: 1,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list14Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  lastExpenses: {
    fontFamily: "poppins-regular",
    color: "rgba(49,49,49,1)",
    fontSize: 16,
    opacity: 0.5,
    marginTop: -344,
    marginLeft: 20,
  },
  invertedHalfButton: {
    height: 36,
    width: 163,
    marginTop: -1,
  },
  halfButton: {
    height: 36,
    width: 163,
    marginLeft: 9,
    marginTop: -1,
  },
  invertedHalfButtonRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 363,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Home;
