import { useThemeColor } from "@/hooks/useThemeColor";
import { View, Text, type TextProps } from "react-native";

type TextType = "normal" | "h1" | "h2" | "semi-bold" | "link";

interface Props extends TextProps {
    className?: string;
    type?: TextType;
}

const ThemedText = ({ className, type, children, ...rest }: Props) => {
    const foregroundColor = useThemeColor({}, "foreground");
    return (
        <Text
            className={[
                type === "normal" ? "font-normal" : undefined,
                type === "h1" ? "text-3xl" : undefined,
                type === "h2" ? "text-xl" : undefined,
                type === "semi-bold" ? "font-semibold" : undefined,
                type === "link" ? "font-normal underline" : undefined,
            ].join("")}
            style={{
                color : foregroundColor
            }}
            {...rest}
        >
            {children}
        </Text>
    );
};

export default ThemedText;
