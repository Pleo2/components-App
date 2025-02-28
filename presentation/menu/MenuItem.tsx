import { Link, RelativePathString, router } from "expo-router";
import React, { Children } from "react";
import { View, Text, Pressable } from "react-native";
import ThemedText from "../share/ThemedText";
import { Ionicons}  from "@expo/vector-icons"
import { useThemeColor } from "@/hooks/useThemeColor";

interface Props {
    title: string;
    route: RelativePathString;
    icon: keyof typeof Ionicons.glyphMap;

    isFirst: boolean;
    isLast: boolean;
}

const MenuItem = ({
    route,
    title,
    icon,
    isFirst = false,
    isLast = false
}: Props) => {
    const iconColors = useThemeColor({}, "primary");
    return (
        <Pressable
            onPress={() => router.push(route)}
            className="bg-gray-100 dark:bg-gray-100/10 px-4 py-2 active:opacity-70"
            style={{
                ...(isFirst) && {
                    borderTopEndRadius: 10,
                    borderTopStartRadius: 10,
                    paddingTop: 10,
                },
                ...(isLast) && {
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10,
                    paddingBottom: 10
                }
            }}
        >
            <View className="flex-row items-center gap-4 ">
                <Ionicons name={icon} size={25} color={iconColors} />
                <ThemedText children={title} type="h2"  />
            </View>
        </Pressable>
    );
};
export default MenuItem;
