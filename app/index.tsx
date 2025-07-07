import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      {/* Pil (Stambuk) */}
      <View
        style={{
          backgroundColor: "black",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 50,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
          }}
        >
          10584110722
        </Text>
      </View>

      {/* Persegi Panjang (Nama) */}
      <View
        style={{
          backgroundColor: "blue",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
          }}
        >
          HASRADDIN
        </Text>
      </View>

      {/* Segitiga */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 70,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "green",
        }}
      />
    </View>
  );
}
