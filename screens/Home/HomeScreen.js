import React from "react";
import { Button, View, Text, SafeAreaView, StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import ItemCarousel from "./ItemCarousel";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { colors } from "../../core/theme/colors";

export default function HomeScreen({ navigation }) {

  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselItems = [
    {
      img: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2014/01/GettyImages-1286534053-620x413.jpg',
      title: "Item 1",
      text: "Buscá tu mascota desde el menú lateral",
    },
    {
      img: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg',
      title: "Item 2",
      text: "Elige tus animales favoritos",
    },
    {
      img: 'https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg',
      title: "Item 3",
      text: "Comparte para llegar a más personas",
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Carousel
          layout={"default"}
          ref={ref => carousel = ref}
          data={carouselItems}
          sliderWidth={350}
          itemWidth={350}
          renderItem={ItemCarousel}
          onSnapToItem={index => setActiveIndex(index)} />
      </View>
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        dotColor={'rgba(255, 255, 255, 1)'}
        inactiveDotColor={'rgba(255, 255, 255, 0.5)'}
        dotStyle={{
          backgroundColor: 'white', width: 10, height: 10, borderRadius: 5, marginHorizontal: 8
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.8} />
      <View style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={styles.buttonStart}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          title="Comenzar" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40
  },
  buttonStart: {
    width: '100%'
  }
});