import "@/styles/global.css";

import React, { useEffect } from "react";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const backgroundColor = useThemeColor({ }, "background");

    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
            <ThemeProvider
                value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
                <Stack
                    screenOptions={{
                        headerShadowVisible: false,
                    }}
                >
                    <Stack.Screen name="index" options={{ title: "Inicio" }} />s
                </Stack>
            </ThemeProvider>
        </GestureHandlerRootView>

    );
}
