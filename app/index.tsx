import { View, Text, StyleSheet } from "react-native";

const names = [
  "hasraddin", "ahmad", "zulfikar", "yogi", "rosfika", "fikri maulana", "tegar", "afifah",
  "nur fadillah", "farel apta indratama",
];

const nims = [
  "105841107722", "105841107922", "105841107822", "105841108122", "105841108022", "105841107622", "105841110722", "105841111022",
  "105841110422", "105841109422"
];

const fontList = [
  "BitcountPropSingle_roman-regulerr",
  "NotoSansJP-Regularr",
  "PlaywriteHU-Regular",
  "IntelOneMono-Regular",
  "SpecialGothicExpandedOne-Regular",
  "WinkyRough-Regular",
  "NotoSansKR-Regular",
  "PlaywritePL-Regular",
  "Inconsolata_ExtraExpanded-Regular",
  "BebasNeue-Regular"
];

const totalNames = names.length;

export default function HomeScreen() {
  const stambukIndex = 3; // Misalnya stambuk ke-3 (index 3 = "Deni")
  const before = [];
  const after = [];

  for (let i = 1; i <= 5; i++) {
    before.push((stambukIndex - i + totalNames) % totalNames);
    after.push((stambukIndex + i) % totalNames);
  }

  const finalIndexes = [...before.reverse(), ...after];

  return (
    <View style={styles.container}>
      {finalIndexes.map((index, i) => (
        <View key={i} style={styles.item}>
          <Text style={[styles.name, { fontFamily: fontList[i] }]}>
            {names[index]}
          </Text>
          <Text style={[styles.nim, { fontFamily: fontList[i] }]}>
            {nims[index]}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    marginVertical: 8,
    alignItems: "center",
  },
  name: {
    fontSize: 26,
  },
  nim: {
    fontSize: 16,
    color: "#555",
  },
});
