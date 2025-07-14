import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const mainImages = [
  "https://placekitten.com/200/200",
  "https://placebear.com/200/200",
  "https://placebeard.it/200x200",
  "https://baconmockup.com/200/200",
  "https://placekitten.com/201/200",
  "https://placebear.com/201/200",
  "https://placebeard.it/201x200",
  "https://baconmockup.com/201/200",
  "https://placekitten.com/202/200",
];

const altImages = [
  "https://placekitten.com/300/300",
  "https://placebear.com/300/300",
  "https://placebeard.it/300x300",
  "https://baconmockup.com/300/300",
  "https://placekitten.com/301/300",
  "https://placebear.com/301/300",
  "https://placebeard.it/301x300",
  "https://baconmockup.com/301/300",
  "https://placekitten.com/302/300",
];

export default function GridGallery() {
  const [images, setImages] = useState(
    mainImages.map((uri, index) => ({
      id: index,
      isAlt: false,
      scale: 1.0,
    }))
  );

  const handlePress = (index: number) => {
    setImages((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          if (!item.isAlt) {
            return {
              ...item,
              isAlt: true,
              scale: Math.min(item.scale + 0.2, 2.0),
            };
          } else {
            return {
              ...item,
              isAlt: false,
              scale: 1.0,
            };
          }
        }
        return item;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={{
        fontSize: 16,
        marginBottom: 16,
        textAlign: "center",
        color: "#666",
        fontFamily: "MySoul-Regular",
      }}>
          NAMA MUHAMMAD HASRADDIN HASNAN
          NIM 105841107722
        </Text>


      {/* Grid Gambar */}
      <View style={styles.grid}>
        {images.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            activeOpacity={0.8}
          >
            <Image
              source={{
                uri: item.isAlt ? altImages[index] : mainImages[index],
              }}
              style={[
                styles.image,
                { transform: [{ scale: item.scale }] },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
  },
  nameBox: {
    backgroundColor: "gray",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 1,
    textAlign: "center",
  },
  nimBox: {
    backgroundColor: "#3A4750",
    width: 240,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  nimText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#eee",
  },
});
