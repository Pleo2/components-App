import ThemedButton from "@/presentation/share/ThemedButton";
import ThemedText from "@/presentation/share/ThemedText";
import ThemedView from "@/presentation/share/ThemedView";
import { router } from "expo-router";
import { StatusBar } from 'expo-status-bar'
import React from "react";
import { Platform, View } from "react-native";

const ModalScreen = () => {
    return (
        <>
            <ThemedView
                className="mb-6 rounded-xl items-center justify-center gap-4"
            >
                <ThemedText type="h2">ModalScreen</ThemedText>
                <ThemedButton onPress={() => router.push("/modal/modal-window-2")} >go to next modal</ThemedButton>
                <ThemedButton onPress={() => router.dismiss()} >
                    go to back
                </ThemedButton>
            </ThemedView>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
        </>
    );
};
export default ModalScreen;
