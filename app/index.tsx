import ThemedView from "@/presentation/share/ThemedView";
import { RelativePathString } from "expo-router";
import {
    animationMenuRoutes,
    menuRoutes,
    uiMenuRoutes
} from "@/constants/Routes";
import MenuItem from "@/presentation/menu/MenuItem";
import { View } from "react-native";

const ComponentsApp = () => {
    return (
        <ThemedView>
            <ThemedView className="mx-4">
                {animationMenuRoutes.map((route, index) => (
                    <MenuItem
                        key={route.name}
                        title={route.title}
                        route={route.name.split("/")[0] as RelativePathString}
                        icon={route.icon}
                        isFirst={index === 0}
                        isLast={index === animationMenuRoutes.length - 1}
                    />
                ))}
                <View className="my-3" />
                {uiMenuRoutes.map((route, index) => (
                    <MenuItem
                        key={route.name}
                        title={route.title}
                        route={route.name.split("/")[0] as RelativePathString}
                        icon={route.icon}
                        isFirst={index === 0}
                        isLast={index === uiMenuRoutes.length - 1}
                    />
                ))}
                <View className="my-3" />

                {menuRoutes.map((route, index) => (
                    <MenuItem
                        key={route.name}
                        title={route.title}
                        route={route.name.split("/")[0] as RelativePathString}
                        icon={route.icon}
                        isFirst={index === 0}
                        isLast={index === menuRoutes.length - 1}
                    />
                ))}
            </ThemedView>
        </ThemedView>
    );
};
export default ComponentsApp;
