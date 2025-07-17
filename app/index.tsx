import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

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
          const newScale = Math.min(item.scale + 0.2, 2.0);
          return {
            ...item,
            isAlt: !item.isAlt,
            scale: newScale,
          };
        }
        return item;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Nama */}
      <View style={styles.nameBox}>
        <Text style={styles.nameText}>MUHAMMAD HASRADDIN HASNAN</Text>
      </View>

      {/* NIM */}
      <View style={styles.nimBox}>
        <Text style={styles.nimText}>105841107722</Text>
      </View>

      {/* Grid */}
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
    backgroundColor: "#444",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  nimBox: {
    backgroundColor: "#2E86C1",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  nimText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    fontFamily: "sans-serif-medium",
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
