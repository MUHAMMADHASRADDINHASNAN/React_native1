import { Tabs } from 'expo-router'; // Import komponen Tabs dari expo-router

// Komponen utama layout untuk tab navigasi
export default function Layout() {
  return (
    // Tabs akan membuat navigasi tab bar di bawah
    <Tabs>
      {/* Gunakan grup (tabs) sebagai layout utama dan sembunyikan header bawaan */}
      <Tabs.Screen name="(tabs)" options={{ headerShown: false }} />
    </Tabs>
  );
}
