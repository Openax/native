import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SmallFlatButton from "../components/SmallFlatButton";
import List from "../components/homePageComponents/List";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Navigation from "../components/Navigation";
import Swiper from "react-native-swiper";

const SliderComponent = (props) => {
  const styles = StyleSheet.create({
    wrapper: {
      paddingTop: 0,
      height: 240,
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

  return (
    <Swiper
      style={styles.wrapper}
      paginationStyle={{ marginTop: 0, paddingTop: 0 }}
      loop={false}
    >
      <View style={{ marginTop: 10 }}>{props.children}</View>
      <View style={{ marginTop: 10 }}>{props.children}</View>
      <View style={{ marginTop: 10 }}>{props.children}</View>
    </Swiper>
  );
};

function Stats({ navigation }) {
  const [selectedValueBtn, setSelectedValueBtn] = useState("week");

  const weekExpenses = [
    {
      name: "Mycrosoft Xbox",
      date: "15/09/2020",
    },
    {
      name: "Mycrosoft Xbox",
      date: "15/09/2020",
    },
    {
      name: "Mycrosoft Xbox",
      date: "15/09/2020",
    },
    {
      name: "Mycrosoft Xbox",
      date: "15/09/2020",
    },
    {
      name: "Mycrosoft Xbox",
      date: "15/09/2020",
    },
  ];

  let weekExpensesItems = weekExpenses.map((item, index) => {
    return (
      <View style={styles.list1Stack}>
        <List
          key={index.toString()}
          name2="Mycrosoft Xbox"
          ddMmYyyy2="15/09/2020"
          style={styles.list1}
        ></List>
        <IoniconsIcon name="logo-xbox" style={styles.icon4}></IoniconsIcon>
      </View>
    );
  });

  let monthExpensesItems = weekExpenses.map((item, index) => {
    return (
      <View style={styles.list1Stack}>
        <List
          key={index.toString()}
          name2="Mycrosoft Xbox"
          ddMmYyyy2="15/09/2020"
          style={styles.list1}
        ></List>
        <IoniconsIcon name="logo-xbox" style={styles.icon4}></IoniconsIcon>
      </View>
    );
  });

  let yearExpensesItems = weekExpenses.map((item, index) => {
    return (
      <View style={styles.list1Stack}>
        <List
          key={index.toString()}
          name2="Mycrosoft Xbox"
          ddMmYyyy2="15/09/2020"
          style={styles.list1}
        ></List>
        <IoniconsIcon name="logo-xbox" style={styles.icon4}></IoniconsIcon>
      </View>
    );
  });

  let feturedExpenses = weekExpenses.map((item, index) => {
    return (
      <View style={styles.list1Stack}>
        <List
          key={index.toString()}
          name2="Mycrosoft Xbox"
          ddMmYyyy2="15/09/2020"
          style={styles.list1}
        ></List>
        <IoniconsIcon name="logo-xbox" style={styles.icon4}></IoniconsIcon>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      {/* Title balance  */}
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

        {/* BUTTONS BALANCE DATA */}
        <View style={styles.smallFlatButtonRow}>
          <TouchableOpacity
            onPress={() => {
              setSelectedValueBtn("week");
            }}
          >
            <SmallFlatButton
              button="Week"
              style={
                selectedValueBtn == "week"
                  ? styles.smallFlatButtonActive
                  : styles.smallFlatButtonDisactive
              }
            ></SmallFlatButton>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedValueBtn("month");
            }}
          >
            <SmallFlatButton
              button="Month"
              style={
                selectedValueBtn == "month"
                  ? styles.smallFlatButtonActive
                  : styles.smallFlatButtonDisactive
              }
            ></SmallFlatButton>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedValueBtn("year");
            }}
          >
            <SmallFlatButton
              button="Year"
              style={
                selectedValueBtn == "year"
                  ? styles.smallFlatButtonActive
                  : styles.smallFlatButtonDisactive
              }
            ></SmallFlatButton>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.featuredExpenses}>Featured Expenses</Text>

      {/* SLIDER */}

      <SliderComponent>{feturedExpenses}</SliderComponent>
      <Text style={styles.weekExpenses}>Week Expenses</Text>
      <View style={styles.group}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.group_contentContainerStyle}
        >
          {weekExpensesItems}
        </ScrollView>
      </View>
      <Navigation
        navigation={navigation}
        style={styles.navigation}
      ></Navigation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: "99%",
    alignSelf: "center",
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
    fontSize: 20,
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
    width: "99%",
    alignSelf: "center",
  },
  smallFlatButtonActive: {
    height: 36,
    width: 125,
  },
  smallFlatButtonDisactive: {
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
    flex: 0.5,
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
    marginLeft: 20,
  },
});

export default Stats;
