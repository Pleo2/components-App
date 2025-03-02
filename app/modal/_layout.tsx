import ThemedText from "@/presentation/share/ThemedText";
import { Stack } from "expo-router";

const MoldalLayout = () => {
    return (
            <Stack screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="index" />
                <Stack.Screen
                    name="modal-window"
                    options={{
                        presentation: "modal"
                    }}
                />
            </Stack>
    );
};
export default MoldalLayout;
