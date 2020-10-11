import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import SmallFlatButton from "../components/SmallFlatButton";
import Svg, { Ellipse } from "react-native-svg";
import List from "../components/homePageComponents/List";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Pagination from "../components/Pagination";
import Navigation from "../components/Navigation";

function Stats(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.thisWeekColumnRow}>
          <View style={styles.thisWeekColumn}>
            <Text style={styles.thisWeek}>This Week</Text>
            <View style={styles.thisWeek2Stack}>
              <Text style={styles.thisWeek2}>- 2,038.73</Text>
              <Text style={styles.loremIpsum3}>$</Text>
            </View>
          </View>
          <View style={styles.rect2}></View>
          <Text style={styles.loremIpsum2}>$</Text>
          <View style={styles.balanceColumn}>
            <Text style={styles.balance}>Balance</Text>
            <Text style={styles.loremIpsum}>15,942.26</Text>
          </View>
        </View>
        <View style={styles.smallFlatButtonRow}>
          <SmallFlatButton
            button="Button"
            button="Week"
            style={styles.smallFlatButton}
          ></SmallFlatButton>
          <SmallFlatButton
            button="Month"
            style={styles.smallFlatButton2}
          ></SmallFlatButton>
          <SmallFlatButton
            button="Year"
            style={styles.smallFlatButton3}
          ></SmallFlatButton>
        </View>
        <Svg viewBox="0 0 5.29 5.29" style={styles.ellipse}>
          <Ellipse
            strokeWidth={0}
            fill="rgba(255,255,255,1)"
            cx={3}
            cy={3}
            rx={3}
            ry={3}
          ></Ellipse>
        </Svg>
      </View>
      <Text style={styles.featuredExpenses}>Featured Expenses</Text>
      <View style={styles.scrollArea1}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea1_contentContainerStyle}
        >
          <View style={styles.list1Stack}>
            <List
              name2="Mycrosoft Xbox"
              ddMmYyyy2="15/09/2020"
              style={styles.list1}
            ></List>
            <IoniconsIcon name="logo-xbox" style={styles.icon4}></IoniconsIcon>
          </View>
          <View style={styles.list2Stack}>
            <List
              name2="Spotify"
              ddMmYyyy2="15/09/2020"
              loremIpsum3="-$ 108.93"
              style={styles.list2}
            ></List>
            <EntypoIcon name="spotify" style={styles.icon3}></EntypoIcon>
          </View>
          <View style={styles.list3Stack}>
            <List
              name2="Paypal"
              ddMmYyyy2="12/09/2020"
              style={styles.list3}
            ></List>
            <MaterialCommunityIconsIcon
              name="paypal"
              style={styles.icon5}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.list4Stack}>
            <List
              name2="Sony Playstation"
              ddMmYyyy2="08/09/2020"
              loremIpsum3="+ $ 300.67"
              style={styles.list4}
            ></List>
            <MaterialCommunityIconsIcon
              name="playstation"
              style={styles.icon2}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.list5Stack}>
            <List
              name2="Apple"
              ddMmYyyy2="02/09/2020"
              style={styles.list5}
            ></List>
            <EntypoIcon name="app-store" style={styles.icon1}></EntypoIcon>
          </View>
          <View style={styles.list6Stack}>
            <List
              name2="Mycrosoft Xbox"
              ddMmYyyy2="30/08/2020"
              style={styles.list6}
            ></List>
            <IoniconsIcon name="logo-xbox" style={styles.icon6}></IoniconsIcon>
          </View>
          <View style={styles.list7Stack}>
            <List
              name2="Sony Playstation"
              ddMmYyyy2="27/08/2020"
              style={styles.list7}
            ></List>
            <MaterialCommunityIconsIcon
              name="playstation"
              style={styles.icon7}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.list8Stack}>
            <List
              name2="Spotify"
              ddMmYyyy2="24/08/2020"
              style={styles.list8}
            ></List>
            <EntypoIcon name="spotify" style={styles.icon8}></EntypoIcon>
          </View>
          <View style={styles.list9Stack}>
            <List
              name2="Apple"
              ddMmYyyy2="19/08/2020"
              style={styles.list9}
            ></List>
            <EntypoIcon name="app-store" style={styles.icon9}></EntypoIcon>
          </View>
          <View style={styles.list11Stack}>
            <List
              name2="Mycrosoft Xbox"
              ddMmYyyy2="12/08/2020"
              style={styles.list11}
            ></List>
            <IoniconsIcon name="logo-xbox" style={styles.icon10}></IoniconsIcon>
          </View>
          <View style={styles.list10Stack}>
            <List
              name2="Spotify"
              ddMmYyyy2="08/08/2020"
              style={styles.list10}
            ></List>
            <EntypoIcon name="spotify" style={styles.icon11}></EntypoIcon>
          </View>
          <View style={styles.list12Stack}>
            <List
              name2="Apple"
              ddMmYyyy2="01/08/2020"
              style={styles.list12}
            ></List>
            <EntypoIcon name="app-store" style={styles.icon13}></EntypoIcon>
          </View>
          <View style={styles.list13Stack}>
            <List
              name2="Paypal"
              ddMmYyyy2="26/07/2020"
              style={styles.list13}
            ></List>
            <MaterialCommunityIconsIcon
              name="paypal"
              style={styles.icon12}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.list14Stack}>
            <List
              name2="Sony Playstation"
              ddMmYyyy2="21/07/2020"
              loremIpsum3="+$ 239.00"
              style={styles.list14}
            ></List>
            <MaterialCommunityIconsIcon
              name="playstation"
              style={styles.icon14}
            ></MaterialCommunityIconsIcon>
          </View>
        </ScrollView>
      </View>
      <Pagination style={styles.pagination}></Pagination>
      <View style={styles.group}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.group_contentContainerStyle}
        >
          <View style={styles.list15Stack}>
            <List
              name2="Mycrosoft Xbox"
              ddMmYyyy2="15/09/2020"
              style={styles.list15}
            ></List>
            <IoniconsIcon name="logo-xbox" style={styles.icon18}></IoniconsIcon>
          </View>
          <View style={styles.list16Stack}>
            <List
              name2="Spotify"
              ddMmYyyy2="15/09/2020"
              loremIpsum3="-$ 108.93"
              style={styles.list16}
            ></List>
            <EntypoIcon name="spotify" style={styles.icon17}></EntypoIcon>
          </View>
          <View style={styles.list17Stack}>
            <List
              name2="Paypal"
              ddMmYyyy2="12/09/2020"
              style={styles.list17}
            ></List>
            <MaterialCommunityIconsIcon
              name="paypal"
              style={styles.icon19}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.list18Stack}>
            <List
              name2="Sony Playstation"
              ddMmYyyy2="08/09/2020"
              loremIpsum3="+ $ 300.67"
              style={styles.list18}
            ></List>
            <MaterialCommunityIconsIcon
              name="playstation"
              style={styles.icon16}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.list19Stack}>
            <List
              name2="Apple"
              ddMmYyyy2="02/09/2020"
              style={styles.list19}
            ></List>
            <EntypoIcon name="app-store" style={styles.icon15}></EntypoIcon>
          </View>
          <View style={styles.list20Stack}>
            <List
              name2="Mycrosoft Xbox"
              ddMmYyyy2="30/08/2020"
              style={styles.list20}
            ></List>
            <IoniconsIcon name="logo-xbox" style={styles.icon20}></IoniconsIcon>
          </View>
          <View style={styles.list21Stack}>
            <List
              name2="Sony Playstation"
              ddMmYyyy2="27/08/2020"
              style={styles.list21}
            ></List>
            <MaterialCommunityIconsIcon
              name="playstation"
              style={styles.icon21}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.list22Stack}>
            <List
              name2="Spotify"
              ddMmYyyy2="24/08/2020"
              style={styles.list22}
            ></List>
            <EntypoIcon name="spotify" style={styles.icon22}></EntypoIcon>
          </View>
          <View style={styles.list23Stack}>
            <List
              name2="Apple"
              ddMmYyyy2="19/08/2020"
              style={styles.list23}
            ></List>
            <EntypoIcon name="app-store" style={styles.icon23}></EntypoIcon>
          </View>
          <View style={styles.list25Stack}>
            <List
              name2="Mycrosoft Xbox"
              ddMmYyyy2="12/08/2020"
              style={styles.list25}
            ></List>
            <IoniconsIcon name="logo-xbox" style={styles.icon24}></IoniconsIcon>
          </View>
          <View style={styles.list24Stack}>
            <List
              name2="Spotify"
              ddMmYyyy2="08/08/2020"
              style={styles.list24}
            ></List>
            <EntypoIcon name="spotify" style={styles.icon25}></EntypoIcon>
          </View>
          <View style={styles.list26Stack}>
            <List
              name2="Apple"
              ddMmYyyy2="01/08/2020"
              style={styles.list26}
            ></List>
            <EntypoIcon name="app-store" style={styles.icon27}></EntypoIcon>
          </View>
          <View style={styles.list27Stack}>
            <List
              name2="Paypal"
              ddMmYyyy2="26/07/2020"
              style={styles.list27}
            ></List>
            <MaterialCommunityIconsIcon
              name="paypal"
              style={styles.icon26}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.list28Stack}>
            <List
              name2="Sony Playstation"
              ddMmYyyy2="21/07/2020"
              loremIpsum3="+$ 239.00"
              style={styles.list28}
            ></List>
            <MaterialCommunityIconsIcon
              name="playstation"
              style={styles.icon28}
            ></MaterialCommunityIconsIcon>
          </View>
        </ScrollView>
      </View>
      <Navigation style={styles.navigation}></Navigation>
      <Text style={styles.weekExpenses}>Week Expenses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: 375,
    height: 216,
    backgroundColor: "rgba(36,108,166,1)",
  },
  thisWeek: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    opacity: 0.5,
  },
  thisWeek2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
  },
  loremIpsum3: {
    top: 3,
    left: 12,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    opacity: 0.6,
  },
  thisWeek2Stack: {
    width: 111,
    height: 33,
    marginTop: 11,
  },
  thisWeekColumn: {
    width: 111,
    marginTop: 8,
    marginBottom: 4,
  },
  rect2: {
    width: 2,
    height: 65,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    marginLeft: 36,
    marginTop: 12,
  },
  loremIpsum2: {
    fontFamily: "poppins-600",
    color: "rgba(255,255,255,1)",
    marginLeft: 29,
    marginTop: 34,
  },
  balance: {
    fontFamily: "poppins-600",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    opacity: 0.6,
    marginLeft: 47,
  },
  loremIpsum: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 14,
  },
  balanceColumn: {
    width: 140,
    marginLeft: 8,
    marginBottom: 1,
  },
  thisWeekColumnRow: {
    height: 77,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
  },
  smallFlatButton: {
    height: 36,
    width: 125,
  },
  smallFlatButton2: {
    width: 125,
    height: 36,
    opacity: 0.5,
  },
  smallFlatButton3: {
    width: 125,
    height: 36,
    opacity: 0.5,
  },
  smallFlatButtonRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 27,
  },
  ellipse: {
    width: 5,
    height: 5,
    marginLeft: 60,
  },
  featuredExpenses: {
    fontFamily: "poppins-regular",
    color: "rgba(49,49,49,1)",
    fontSize: 16,
    opacity: 0.5,
    marginTop: 8,
    marginLeft: 20,
  },
  scrollArea1: {
    width: 335,
    height: 105,
    marginTop: 22,
    marginLeft: 20,
  },
  scrollArea1_contentContainerStyle: {
    height: 718,
    width: 335,
  },
  list1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 42,
    width: 335,
  },
  icon4: {
    top: 5,
    left: 4,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list1Stack: {
    width: 335,
    height: 42,
  },
  list2: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon3: {
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
  icon5: {
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
  icon1: {
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
  icon6: {
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
  icon7: {
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
  icon8: {
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
  icon9: {
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
  icon10: {
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
  icon11: {
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
  icon13: {
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
  icon12: {
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
  icon14: {
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
  pagination: {
    height: 10,
    width: 49,
    marginLeft: 163,
  },
  group: {
    width: 335,
    height: 259,
    marginTop: 72,
    marginLeft: 20,
  },
  group_contentContainerStyle: {
    height: 718,
    width: 335,
  },
  list15: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 42,
    width: 335,
  },
  icon18: {
    top: 5,
    left: 4,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list15Stack: {
    width: 335,
    height: 42,
  },
  list16: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon17: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list16Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list17: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon19: {
    top: 5,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list17Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list18: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon16: {
    top: 5,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list18Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list19: {
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
  list19Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list20: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon20: {
    top: 4,
    left: 4,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list20Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list21: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon21: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list21Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list22: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon22: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list22Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list23: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon23: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list23Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list25: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon24: {
    top: 4,
    left: 4,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list25Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list24: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon25: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list24Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list26: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon27: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list26Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list27: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon26: {
    top: 5,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list27Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  list28: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42,
  },
  icon28: {
    top: 5,
    left: 1,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30,
  },
  list28Stack: {
    width: 335,
    height: 42,
    marginTop: 10,
  },
  navigation: {
    width: 375,
    height: 83,
    marginTop: 11,
  },
  weekExpenses: {
    fontFamily: "poppins-regular",
    color: "rgba(49,49,49,1)",
    fontSize: 16,
    opacity: 0.5,
    marginTop: -399,
    marginLeft: 20,
  },
});

export default Stats;
