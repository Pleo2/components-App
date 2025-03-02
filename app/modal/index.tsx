import ThemedButton from "@/presentation/share/ThemedButton";
import ThemedView from "@/presentation/share/ThemedView";
import { router } from "expo-router";

const ModalScreen = () => {
    return (
        <ThemedView className="items-center justify-center">
            <ThemedButton onPress={() => router.push("/modal/modal-window")}>ModalScreen</ThemedButton>
        </ThemedView>
    );
};
export default ModalScreen;
