import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// Komponen untuk halaman Profil
export default function ProfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Judul halaman */}
      <Text style={styles.title}>Data Diri</Text>

      {/* Foto profil dari gambar lokal */}
      <Image source={require('../../assets/1713448911840.jpg')} style={styles.image} />

      {/* Data pribadi */}
      <Text style={styles.label}>Nama Lengkap:</Text>
      <Text style={styles.value}>MUHAMMAD HASRADDIN HASNAN</Text>

      <Text style={styles.label}>NIM:</Text>
      <Text style={styles.value}>105841107722</Text>

      <Text style={styles.label}>Kelas:</Text>
      <Text style={styles.value}>6C</Text>

      <Text style={styles.label}>Jurusan:</Text>
      <Text style={styles.value}>Informatika</Text>

      <Text style={styles.label}>Fakultas:</Text>
      <Text style={styles.value}>Fakultas Teknik</Text>
    </ScrollView>
  );
}

// Gaya untuk halaman Profil
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100, // agar gambar menjadi lingkaran
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    alignSelf: 'flex-start',
  },
});
