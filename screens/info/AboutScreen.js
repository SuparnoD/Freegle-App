import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Carousel from "react-native-snap-carousel";
import { Colors } from "../../constants/Colors";

const AboutScreen = () => {
  const { width: screenWidth } = Dimensions.get("window");

  const ITEMS = [
    {
      title: "What Do We Do?",
      text:
        "Do your unwanted but useful items need new homes? Are you looking for something?" +
        "\n\n" +
        "We help people give and get things for free in their local community. Some people have stuff they don't want any more. Other people would like things they don't have. We match them up. We don't have physical premises, or warehouses - people give things directly to each other." +
        "\n\n" +
        "Don't throw it away, give it away!",
    },
    {
      title: "How Does It Work?",
      text:
        "It's simple." +
        "\n\n" +
        "\u2022" +
        "\u0009" +
        "Post a message offering an item." +
        "\n\n" +
        "\u2022" +
        "\u0009" +
        "Other people see it and reply to you." +
        "\n\n" +
        "\u2022" +
        "\u0009" +
        "Choose who to give it to and they collect." +
        "\n\n" +
        "\u2022" +
        "\u0009" +
        "You've decluttered, made someone's day and saved an item from landfill." +
        "\n\n" +
        "That's freegling! And it's all free." +
        "\n\n" +
        "You can also search or browse the items offered, or post a request for something that other people might have.",
    },
    {
      title: "How Is It Funded?",
      text:
        "Freegle is free to use, but not free to run. We provide a free service, and keep costs phenomenally low thanks to our large number of committed volunteers - our annual budget averages around £80,000 each year for the whole of the UK." +
        "\n\n" +
        "Nevertheless, there are still costs involved, and if we had more money we could get more people freegling more often. We run on a shoestring...actually, we're saving up to buy a shoestring." +
        "\n\n" +
        "There are lots of good causes out there, many of them for life-threatening conditions, all of them competing for charity funding. It usually goes to bigger charities than us doing more important work, so we currently rely on voluntary donations to cover our costs" +
        "\n\n" +
        "Many current donations come from our volunteers, who are already donating their time and may not be able to donate money as well. If you can, please donate £3 to keep us running - but anything you can give is very welcome. Regular monthly donations are especially helpful." +
        "\n\n" +
        "We also have ads on the site and in emails. It doesn't raise as much as you'd think, but it helps keep us running.",
    },
    {
      title: "What's Our Legal Structure?",
      text:
        "Freegle is a UK-wide umbrella organisation, formed in 2009 by experienced volunteers and members of the free reuse community. We are a charity, and our charitable aims are:" +
        "\n\n" +
        "\u2022" +
        "\u0009" +
        "Promoting the keeping of usable items out of landfill." +
        "\n" +
        "\u2022" +
        "\u0009" +
        "Promoting and supporting local community groups working in the area of reuse." +
        "\n" +
        "\u2022" +
        "\u0009" +
        "Empowering and supporting volunteers working for local Freegle groups." +
        "\n" +
        "\u2022" +
        "\u0009" +
        "Informing and educating the public about environmental matters related to the reuse and recycling of unwanted usable goods." +
        "\n" +
        "\u2022" +
        "\u0009" +
        "Promoting sustainable waste management practices." +
        "\n\n" +
        "Each Freegle local group is run independently and is affiliated to Freegle Ltd, which provides central services (such as this app) to these groups and their volunteers. Freegle Ltd is a Registered Society (previously known as an Industrial and Provident Society for Community Benefit). Freegle Ltd is owned and governed by its members. Local and national volunteers are eligible for membership." +
        "\n\n" +
        "Charities of this type are slightly unusual in that they do not register with the Charity Commission. Instead they register with the Financial Conduct Authority (our registration number is 32410R) and also register with HMRC as charitable (our reference is XT32865). So we're legally a charity, and can claim Gift Aid if you donate, but of a slightly different type than you might be used to.",
    },
  ];

  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ITEMS);
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.serviceContainer}>
        <View style={styles.serviceItem}>
          <ScrollView nestedScrollEnabled={true}>
            <Text
              style={{
                fontFamily: "lato-black",
                fontSize: 18,
                color: "#fff",
                textAlign: "center",
                opacity: 100,
                marginVertical: 10,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontFamily: "lato-regular",
                textAlign: "center",
                color: "white",
              }}
            >
              {item.text}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: "-200%",
        }}
      >
        <Text style={styles.header}>About Us</Text>
        <Carousel
          layout={"default"}
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
        />
        <View style={styles.infoContainer}>
          <Text style={{ ...styles.header }}>Who Are We?</Text>

          <Text style={styles.header2}>We Love Volunteers!</Text>
          {/* API to retrieve volunteer icon - probably via flatlist? */}
          <Text style={styles.text}>
            Freegle is run by volunteers. Here are some of us:
          </Text>
          <Text style={{ fontFamily: "lato-light-italic" }}>
            [API to retrieve volunteer icon goes here]
          </Text>
          <Text style={styles.header2}>Our Board</Text>
          <Text style={styles.header2}>Why We Do It</Text>
          <Text style={styles.text}>
            People have different reasons! Common reasons are: Many of us are:
          </Text>
          <Text style={styles.text}>
            {"\u0009"}
            {"\u25cf"}
            {"\u0009"}passionate about the environment - and reuse means we make
            and destroy less stuff.
          </Text>
          <Text style={styles.text}>
            {"\u0009"}
            {"\u25cf"}
            {"\u0009"}We like helping people get things they need, which they
            otherwise couldn't get.
          </Text>
          <Text style={styles.text}>
            {"\u0009"}
            {"\u25cf"}
            {"\u0009"}We care about our local communities, and this is a way to
            make them better.
          </Text>
          <Text style={styles.header2}>Get Involved!</Text>
          <Text style={styles.text}>
            We're always looking for more volunteers - for local communities,
            graphics, publicity, improving the website...there's lots to do.{" "}
            {"\n"}
          </Text>
          <Text style={styles.text}>
            If you'd like to get involved, contact your local community.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontFamily: "lato-black",
    color: Colors.primary,
    top: "2.5%",
    textAlign: "center",
    marginBottom: 15,
  },
  header2: {
    fontSize: 20,
    fontFamily: "lato-bold",
    color: Colors.primary,
    textAlign: "left",
    marginVertical: 15,
    marginHorizontal: 10,
  },
  serviceContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: Dimensions.get("window").height > 700 ? "50%" : "49%",
    width: "95%",
    borderRadius: 10,
    backgroundColor: Colors.primary,
    top: "10%",
  },
  serviceItem: {
    marginBottom: "auto",
    padding: 20,
    bottom: Dimensions.get("window").height > 700 ? 10 : 0,
  },
  infoContainer: {
    bottom: "25%",
    padding: 10,
  },
  text: {
    fontFamily: "lato-regular",
  },
});
