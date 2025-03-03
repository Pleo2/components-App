import ThemedButton from "@/presentation/share/ThemedButton";
import ThemedText from "@/presentation/share/ThemedText";
import ThemedView from "@/presentation/share/ThemedView";
import { router } from "expo-router";
import { StatusBar } from 'expo-status-bar'
import React from "react";
import { Platform } from "react-native";

const ModalScreen = () => {
    return (
        <>
            <ThemedView
                className="mb-6 rounded-xl items-center justify-center"
            >
                <ThemedText type="h2">soy otro Modal</ThemedText>
                <ThemedButton onPress={() => router.dismiss()} >
                    go to back
                </ThemedButton>
            </ThemedView>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>

        </>
    );
};
export default ModalScreen;
