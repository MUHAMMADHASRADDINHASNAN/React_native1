import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'; // Import komponen dasar

// Komponen untuk halaman Home
export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Judul halaman */}
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>

      {/* Paragraf informasi tentang kampus */}
      <Text style={styles.text}>
        Unismuh Makassar terletak di kota Makassar, Sulawesi Selatan. Sebagai salah satu perguruan tinggi swasta terkemuka, Unismuh dikenal dengan komitmennya terhadap pendidikan Islami dan pengembangan masyarakat.
      </Text>

      {/* Gambar kampus dari file lokal */}
      <Image source={require('../../assets/logo_Universitas-Muhammadiyah-Makassar.webp')} style={styles.image} />
    </ScrollView>
  );
}

// Gaya untuk halaman ini
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
