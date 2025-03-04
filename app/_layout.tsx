import "@/styles/global.css";

import React, { useEffect } from "react";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
    useTheme
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { allRoutes } from "@/constants/Routes";
import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";
import { ThemeChangerProvider } from "@/presentation/context/ThemedChargerContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const isAndroid = Platform.OS === "android";

export default function RootLayout() {
    const foregroundColor = useThemeColor({}, "foreground");
    const backgroundColor = useThemeColor({}, "background");
    isAndroid && NavigationBar.setBackgroundColorAsync(backgroundColor);

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

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: backgroundColor,
            primary: backgroundColor
        }
    };

    return (
        <GestureHandlerRootView
            style={{ backgroundColor: backgroundColor, flex: 1 }}
        >
            <ThemeChangerProvider>
                <ThemeProvider value={theme}>
                    <Stack
                        screenOptions={{
                            headerShadowVisible: false,
                            headerShown: true,
                            contentStyle: {
                                backgroundColor: backgroundColor
                            },
                            headerStyle: {
                                backgroundColor: backgroundColor
                            }
                            // statusBarStyle: "auto",
                            // statusBarBackgroundColor: backgroundColor,
                        }}
                    >
                        <Stack.Screen
                            name="index"
                            options={{
                                title: "Inicio",
                                headerTintColor: foregroundColor
                            }}
                        />
                        {allRoutes.map((route, index) => (
                            <Stack.Screen
                                key={route.name + index}
                                name={route.name}
                                options={{
                                    title: route.title,
                                    headerTintColor: foregroundColor,
                                    headerShown:
                                        route.title === "Slides" ? false : true
                                }}
                            />
                        ))}
                    </Stack>
                </ThemeProvider>
            </ThemeChangerProvider>
        </GestureHandlerRootView>
    );
}
