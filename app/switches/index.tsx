import ThemedCard from "@/presentation/share/ThemedCard";
import ThemedSwitch from "@/presentation/share/ThemedSwitch";
import { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const Switches = () => {
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
      });

    return (
        <View className="mx-4">
            <ThemedCard >
                <ThemedSwitch
                    value={state.isActive}
                    onValueChange={(value) => setState({ ...state, isActive: value })}
                    text={'Activo'}
                    className="mb-4"
                />
                  <ThemedSwitch
                    value={state.isHungry}
                    onValueChange={(value) => setState({ ...state, isHungry: value })}
                    text={'Hambriento'}
                    className="mb-4"
                />
                  <ThemedSwitch
                    value={state.isHappy}
                    onValueChange={(value) => setState({ ...state, isHappy: value })}
                    text={'Contento'}
                    className="mb-4"
                />
            </ThemedCard>
        </View>
    );
};
export default Switches;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
