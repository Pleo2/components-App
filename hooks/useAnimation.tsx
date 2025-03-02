import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";

const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({
        duration = 300,
        toValue = 1,
        useNativeDriver = true,
        easing = Easing.linear,
        callback = () => {}
    }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
        }).start(callback);
    };

    const fadeOut = ({
        duration = 500,
        toValue = 0,
        useNativeDriver = true,
        easing = Easing.ease,
        callback = () => {}
    }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
        }).start(
            callback
            // animatedTop.resetAnimation();
            // return animatedTop.setValue(-100);
        );
    };

    const startMovingTopPosition = ({
        inicialPosition = -150,
        duration = 800,
        toValue = 1,
        useNativeDriver = true,
        easing = Easing.bounce,
        callback = () => {}
    }) => {

        animatedTop.setValue(inicialPosition);

        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            // easing: Easing.elastic(1)
            easing: easing
        }).start(callback);
    };

    return {
        animatedOpacity,
        animatedTop,
        //methods
        fadeIn,
        fadeOut,
        startMovingTopPosition
    };
};
export default useAnimation;
