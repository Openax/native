import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import List from "./List";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function FullList(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.listStack}>
            <List
              name2="Mycrosoft Xbox"
              ddMmYyyy2="15/09/2020"
              style={styles.list}
            ></List>
            <IoniconsIcon name="logo-xbox" style={styles.icon6}></IoniconsIcon>
          </View>
          <View style={styles.list2Stack}>
            <List
              name2="Spotify"
              ddMmYyyy2="15/09/2020"
              loremIpsum3="-$ 108.93"
              style={styles.list2}
            ></List>
            <EntypoIcon name="spotify" style={styles.icon5}></EntypoIcon>
          </View>
          <View style={styles.list3Stack}>
            <List
              name2="Paypal"
              ddMmYyyy2="12/09/2020"
              style={styles.list3}
            ></List>
            <MaterialCommunityIconsIcon
              name="paypal"
              style={styles.icon7}
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
            <EntypoIcon name="app-store" style={styles.icon}></EntypoIcon>
          </View>
          <View style={styles.list6Stack}>
            <List
              name2="Mycrosoft Xbox"
              ddMmYyyy2="30/08/2020"
              style={styles.list6}
            ></List>
            <IoniconsIcon name="logo-xbox" style={styles.icon8}></IoniconsIcon>
          </View>
          <View style={styles.list7Stack}>
            <List
              name2="Sony Playstation"
              ddMmYyyy2="27/08/2020"
              style={styles.list7}
            ></List>
            <MaterialCommunityIconsIcon
              name="playstation"
              style={styles.icon9}
            ></MaterialCommunityIconsIcon>
          </View>
          <View style={styles.list8Stack}>
            <List
              name2="Spotify"
              ddMmYyyy2="24/08/2020"
              style={styles.list8}
            ></List>
            <EntypoIcon name="spotify" style={styles.icon10}></EntypoIcon>
          </View>
          <View style={styles.list9Stack}>
            <List
              name2="Apple"
              ddMmYyyy2="19/08/2020"
              style={styles.list9}
            ></List>
            <EntypoIcon name="app-store" style={styles.icon11}></EntypoIcon>
          </View>
          <View style={styles.list11Stack}>
            <List
              name2="Mycrosoft Xbox"
              ddMmYyyy2="12/08/2020"
              style={styles.list11}
            ></List>
            <IoniconsIcon name="logo-xbox" style={styles.icon12}></IoniconsIcon>
          </View>
          <View style={styles.list10Stack}>
            <List
              name2="Spotify"
              ddMmYyyy2="08/08/2020"
              style={styles.list10}
            ></List>
            <EntypoIcon name="spotify" style={styles.icon13}></EntypoIcon>
          </View>
          <View style={styles.list12Stack}>
            <List
              name2="Apple"
              ddMmYyyy2="01/08/2020"
              style={styles.list12}
            ></List>
            <EntypoIcon name="app-store" style={styles.icon15}></EntypoIcon>
          </View>
          <View style={styles.list13Stack}>
            <List
              name2="Paypal"
              ddMmYyyy2="26/07/2020"
              style={styles.list13}
            ></List>
            <MaterialCommunityIconsIcon
              name="paypal"
              style={styles.icon14}
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
              style={styles.icon16}
            ></MaterialCommunityIconsIcon>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  scrollArea: {
    width: 335,
    height: 307
  },
  scrollArea_contentContainerStyle: {
    height: 718,
    width: 335
  },
  list: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 42,
    width: 335
  },
  icon6: {
    top: 5,
    left: 4,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  listStack: {
    width: 335,
    height: 42
  },
  list2: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon5: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list2Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  },
  list3: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon7: {
    top: 5,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list3Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  },
  list4: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon2: {
    top: 5,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list4Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  },
  list5: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list5Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  },
  list6: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon8: {
    top: 4,
    left: 4,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list6Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  },
  list7: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon9: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list7Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  },
  list8: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon10: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list8Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  },
  list9: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon11: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list9Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  },
  list11: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon12: {
    top: 4,
    left: 4,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list11Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  },
  list10: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon13: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list10Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  },
  list12: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon15: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list12Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  },
  list13: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon14: {
    top: 5,
    left: 3,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list13Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  },
  list14: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 335,
    height: 42
  },
  icon16: {
    top: 5,
    left: 1,
    position: "absolute",
    color: "rgba(49,49,49,1)",
    fontSize: 30
  },
  list14Stack: {
    width: 335,
    height: 42,
    marginTop: 10
  }
});

export default FullList;
