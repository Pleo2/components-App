import { useThemeColor } from "@/hooks/useThemeColor";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
    className?: string;
}

const ThemedInput = ({ className, ...rest }: Props) => {
    const textColor = useThemeColor({}, 'foreground')
    return (
        <TextInput
            {...rest}
            autoCapitalize={"words"}
            autoComplete={"name"}
            className={`py-4 px-2 ${className}`}
            placeholderTextColor={'foreground'}
            style={{
                color: textColor
            }}
        />
    );
};
export default ThemedInput;
