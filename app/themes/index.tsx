import { useState } from "react";
import { useColorScheme } from "nativewind";

import { useThemeChangerContext } from "@/presentation/context/ThemedChargerContext";
import ThemedView from "@/presentation/share/ThemedView";
import ThemedCard from "@/presentation/share/ThemedCard";
import ThemedSwitch from "@/presentation/share/ThemedSwitch";

const ThemesScreen = () => {
    // const { colorScheme, setColorScheme } = useColorScheme();

    const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } =
        useThemeChangerContext();

    const [darkModeSettings, setDarkModeSettings] = useState({
        darkMode: currentTheme === "dark",
        systemMode: isSystemTheme
    });

    const setDarkMode = (value: boolean) => {
        // setColorScheme(value ? 'dark' : 'light');
        toggleTheme();

        setDarkModeSettings({
            darkMode: value,
            systemMode: false
        });
    };

    const setSystemMode = (value: boolean) => {
        if (value) {
            setSystemTheme();
        }

        setDarkModeSettings({
            darkMode: darkModeSettings.darkMode,
            systemMode: value
        });
    };

    return (
        <ThemedView margin>
            <ThemedCard className="mt-5">
                <ThemedSwitch
                    text="Dark Mode"
                    className="mb-5"
                    value={darkModeSettings.darkMode}
                    onValueChange={setDarkMode}
                />

                <ThemedSwitch
                    text="System Mode"
                    value={darkModeSettings.systemMode}
                    onValueChange={setSystemMode}
                />
            </ThemedCard>
        </ThemedView>
    );
};
export default ThemesScreen;
