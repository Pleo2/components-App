import { View, Text, type ViewProps } from "react-native";

interface Props extends ViewProps {
    className?: string;
}

const ThemedCard = ({ className, children, ...rest }: Props) => {
    return (
        <View {...rest} className={`bg-gray-100/50 dark:bg-gray-100/10 rounded-xl p-2 shadow shadow-black/5 ${className}`} >
            {children}
        </View>
    );
};
export default ThemedCard;
