import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "WinkyRough-VariableFont_wght": require("../assets/fonts/WinkyRough-VariableFont_wght.ttf"),
    "IntelOneMono-VariableFont_wght": require("../assets/fonts/IntelOneMono-VariableFont_wght.ttf"),
    "PlaywriteHU-VariableFont_wght": require("../assets/fonts/PlaywriteHU-VariableFont_wght.ttf"),
    "PlaywritePL-VariableFont_wght": require("../assets/fonts/PlaywritePL-VariableFont_wght.ttf"),
    "RobotoMono-VariableFont_wght": require("../assets/fonts/RobotoMono-VariableFont_wght.ttf"),
    "Goldman-Bold": require("../assets/fonts/Goldman-Bold.ttf"),
    "SpecialGothicExpandedOne-Regular": require("../assets/fonts/SpecialGothicExpandedOne-Regular.ttf"),
    "BebasNeue-Regular": require("../assets/fonts/BebasNeue-Regular.ttf"),
    "Triodion-Regular": require("../assets/fonts/Triodion-Regular.ttf"),
    "FjallaOne-Regular": require("../assets/fonts/FjallaOne-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return <Stack />;
}
