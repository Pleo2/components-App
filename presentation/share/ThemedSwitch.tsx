import { View, Text, Switch, Pressable, Platform } from "react-native";
import ThemedText from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface Props {
    value?: boolean;
    text: string;
    className?: string;

    onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({ value, text, className, onValueChange }: Props) => {
    const switchActiveColor = useThemeColor({}, 'primary')
    return (
        <Pressable
            className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
            onPress={() => onValueChange(!value)}>
            {text ? <ThemedText type="h2">{text}</ThemedText> : <View/>}
            <Switch
                // ios_backgroundColor={value ? 'green' : "red"}
                trackColor={{
                    true : switchActiveColor,
                    false : 'gray'
                }}
                onValueChange={onValueChange}
                value={value}
                thumbColor={isAndroid ? switchActiveColor : ''}
            />
        </Pressable>
    );
};
export default ThemedSwitch;
