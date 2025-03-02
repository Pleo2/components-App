import useAnimation from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/share/ThemedButton";
import { useEffect } from "react";
import { View, Animated } from "react-native";

const Animation101Screen = () => {
    const {animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();

    useEffect(() => {
        fadeIn({});
    }, []);

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                gap: 10
            }}
        >
            <Animated.View
                className="bg-light-tertiary dark:bg-dark-tertiary rounded-xl"
                style={{
                    height: 150,
                    width: 150,
                    opacity: animatedOpacity,
                    transform: [
                        {
                            translateY: animatedTop
                        }
                    ]
                }}
            />
            <ThemedButton className="my-5" onPress={() => {
                startMovingTopPosition({});
                fadeIn({});
                }}>
                fade in
            </ThemedButton>
            <ThemedButton className="my-5" onPress={() => fadeOut({})}>
                fade out
            </ThemedButton>
        </View>
    );
};
export default Animation101Screen;
