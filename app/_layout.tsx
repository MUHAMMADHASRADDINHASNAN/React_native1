import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "BitcountPropSingle_roman-reguler": require("../assets/fonts/BitcountPropSingle_Roman-Regular.ttf"),
    "NotoSansJP-Regular": require("../assets/fonts/NotoSansJP-Regular.ttf"),
    "PlaywriteHU-Regular": require("../assets/fonts/PlaywriteHU-Regular.ttf"),
    "IntelOneMono-Regular": require("../assets/fonts/IntelOneMono-Regular.ttf"),
    "SpecialGothicExpandedOne-Regular": require("../assets/fonts/SpecialGothicExpandedOne-Regular.ttf"),
    "WinkyRough-Regular": require("../assets/fonts/WinkyRough-Regular.ttf"),
    "NotoSansKR-Regular": require("../assets/fonts/NotoSansKR-Regular.ttf"),
    "PlaywritePL-Regular": require("../assets/fonts/PlaywritePL-Regular.ttf"),
    "Inconsolata_ExtraExpanded-Regular": require("../assets/fonts/Inconsolata_ExtraExpanded-Regular.ttf"),
    "BebasNeue-Regular": require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return <Stack />;
}
