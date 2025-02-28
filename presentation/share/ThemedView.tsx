import { View, Text, type ViewProps } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
    className?: string;
    margin?: boolean;
    safe?: boolean;
    bgColor?: string;
}

const ThemedView = ({
    className,
    margin = false,
    safe = false,
    bgColor,
    children
}: Props) => {
    const backgroundColor = bgColor || useThemeColor({}, "background");
    const safeAreaTop = useSafeAreaInsets();
    return (
        <View
            style={{
                backgroundColor: backgroundColor,
                flex: 1,
                paddingTop: safe ? safeAreaTop.top : 0,
                marginHorizontal: margin ? 10 : 0
            }}
            className={`${className}`}
        >
            {children}
        </View>
    );
};

export default ThemedView;
