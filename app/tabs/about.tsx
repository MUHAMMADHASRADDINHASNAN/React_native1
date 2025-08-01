import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Komponen untuk halaman About
export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Judul halaman */}
      <Text style={styles.title}>Tentang Aplikasi</Text>

      {/* Penjelasan isi dan fungsi aplikasi */}
      <Text style={styles.text}>
        Aplikasi ini dibuat sebagai tugas mata kuliah pengembangan aplikasi mobile menggunakan Expo Router.
        {'\n\n'}
        Fungsi halaman:
        {'\n'}• Home, Menampilkan informasi tentang Universitas Muhammadiyah Makassar.
        {'\n'}• About, Menjelaskan tujuan dan isi aplikasi.
        {'\n'}• Profil, Menampilkan data diri mahasiswa pembuat aplikasi.
      </Text>
    </ScrollView>
  );
}

// Gaya untuk halaman ini
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
