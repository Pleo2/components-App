import { View, Text, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
    className?: string;
}

const ThemedInput = ({ className, ...rest }: Props) => {
    return (
        <TextInput
            {...rest}
            autoCapitalize={"words"}
            autoComplete={"name"}
            className={`py-4 px-2 text-light-foreground dark:text-dark-foreground ${className}`}
            placeholderTextColor={'gray'}
        />
    );
};
export default ThemedInput;
