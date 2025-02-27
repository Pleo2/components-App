import { View, Text, type ViewProps } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

interface Props extends ViewProps {
    className?: string;
    margin?: boolean;
    safe?: boolean;
    bgColor?: string;
}

const ThemedView = ({ className, margin = false, safe = false, bgColor, children }: Props) => {
    const backgroundColor =  bgColor || useThemeColor({ }, "background");
    return (
        <View className={`${className}`}>
            {children}
        </View>
    );
};

export default ThemedView;
