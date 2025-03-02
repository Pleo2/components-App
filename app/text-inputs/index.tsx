import ThemedCard from "@/presentation/share/ThemedCard";
import ThemedInput from "@/presentation/share/ThemedInput";
import ThemedText from "@/presentation/share/ThemedText";
import { useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: ""
    });

    return (
        <KeyboardAvoidingView
            behavior={isIOS ? 'height': undefined}
        >
            <ScrollView>
                <View>
                    <ThemedCard className="mb-4">
                        <ThemedInput
                            placeholder="nombre completo"
                            autoCapitalize={"words"}
                            autoComplete={"name"}
                            onChangeText={(Value) =>
                                setForm({ ...form, name: Value })
                            }
                        />
                    </ThemedCard>
                    <ThemedCard className="mb-4">
                        <ThemedInput
                            placeholder="email"
                            autoComplete={"email"}
                            keyboardType="email-address"
                            onChangeText={(Value) =>
                                setForm({ ...form, email: Value })
                            }
                        />
                    </ThemedCard>
                    <ThemedCard className="mb-4">
                        <ThemedInput
                            placeholder="Numero de telefono"
                            keyboardType="number-pad"
                            onChangeText={(Value) =>
                                setForm({ ...form, phone: Value })
                            }
                        />
                    </ThemedCard>

                    <ThemedCard className="my-4">
                        <ThemedText type="h2">
                            {JSON.stringify(form, null, 2)}
                        </ThemedText>
                    </ThemedCard>
                    <ThemedCard className="my-4">
                        <ThemedText type="h2">
                            {JSON.stringify(form, null, 2)}
                        </ThemedText>
                    </ThemedCard>
                    <ThemedCard className="my-4">
                        <ThemedText type="h2">
                            {JSON.stringify(form, null, 2)}
                        </ThemedText>
                    </ThemedCard>
                    <ThemedCard className="my-4">
                        <ThemedText type="h2">
                            {JSON.stringify(form, null, 2)}
                        </ThemedText>
                    </ThemedCard>
                    <ThemedCard className="my-4">
                        <ThemedText type="h2">
                            {JSON.stringify(form, null, 2)}
                        </ThemedText>
                    </ThemedCard>

                    <ThemedCard className="mb-4" style={{
                        marginBottom: isIOS ? 100 : 10
                    }}>
                        <ThemedInput
                            placeholder="nombre completo"
                            autoCapitalize={"words"}
                            autoComplete={"name"}
                            onChangeText={(Value) =>
                                setForm({ ...form, name: Value })
                            }
                        />
                    </ThemedCard>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
export default TextInputsScreen;
