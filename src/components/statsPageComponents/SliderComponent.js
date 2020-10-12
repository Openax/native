const SliderComponent = () => {
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

export default SliderComponent;
