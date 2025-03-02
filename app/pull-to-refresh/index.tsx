import { useState } from "react";

import { ScrollView, RefreshControl } from "react-native";

import ThemedText from "@/presentation/share/ThemedText";
import ThemedView from "@/presentation/share/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

const PullToRefreshScreen = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const primaryColor = useThemeColor({}, "primary");
    const BgColor = useThemeColor({}, 'background')
    const onrefresh = async () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 4000);
    };
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={onrefresh}
                    colors={[primaryColor, "blue", "green", "black"]}
                    progressBackgroundColor={BgColor}
                />
            }
        >
            <ThemedView className="items-center">
                <ThemedText type="h1" className="font-bold">
                    Pull
                </ThemedText>
                <ThemedText type="h2" className="">
                    To Refresh Screen
                </ThemedText>
            </ThemedView>
        </ScrollView>
    );
};
export default PullToRefreshScreen;
