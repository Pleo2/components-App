import { Pressable, type PressableProps } from "react-native";
import ThemedText from "./ThemedText";

interface Props extends PressableProps {
    className?: string;
    children: string;
}

const ThemedButton = ({ className, onPress, children, ...rest }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            className={`bg-light-primary/20 dark:bg-light-primary/20 items-center rounded-lg px-6 py-2  active:opacity-80 ${className}`}
            {...rest}
        >
            <ThemedText>{children}</ThemedText>
        </Pressable>
    );
};
export default ThemedButton;
