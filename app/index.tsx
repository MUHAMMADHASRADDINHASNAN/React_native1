import { View, Text, StyleSheet } from "react-native";

const names = [
  "Rayhanatul jannah", "Hanna Maryam", "Afifah Aulia", "MUH FIKRIR MAULANA", "MUHAMMAD HASRADDIN HASNAN", "Muhammad Dzulfikar Hidayat", 
  "AHMAD YANI", "Rosfika Awalia", "YOGI A.AMMAH", "Usran",
];

const nims = [
  "105841110822", "105841110922", "105841111022", "105841107622", "105841107722", "105841107822", "105841107922", "105841108122",
  "105841108222", "105841108722"
];

const fontList = [
  "BitcountPropSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght",
  "IntelOneMono-VariableFont_wght",
  "PlaywriteHU-VariableFont_wght",
  "PlaywritePL-VariableFont_wght",
  "RobotoMono-VariableFont_wght",
  "Goldman-Bold",
  "SpecialGothicExpandedOne-Regular",
  "BebasNeue-Regular",
  "Triodion-Regular",
  "FjallaOne-Regular"
];

const totalNames = names.length;

export default function HomeScreen() {
  const stambukIndex = 3; // Misalnya stambuk ke-3 (index 3 = "yogi")
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
    flexDirection: "row", // Tampilkan horizontal
    alignItems: "center",
    gap: 12, // Jarak antara nama dan NIM
  },
  name: {
    fontSize: 26,
    marginRight: 10,
  },
  nim: {
    fontSize: 16,
    color: "#555",
  },
});
