import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedButton from "@/presentation/share/ThemedButton";
import ThemedText from "@/presentation/share/ThemedText";
import ThemedView from "@/presentation/share/ThemedView";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
    ImageSourcePropType,
    FlatList,
    Image,
    useWindowDimensions,
    type NativeScrollEvent,
    type NativeSyntheticEvent
} from "react-native";

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: "Titulo 1",
        desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
        img: require("../../assets/images/slides/slide-1.png")
    },
    {
        title: "Titulo 2",
        desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
        img: require("../../assets/images/slides/slide-2.png")
    },
    {
        title: "Titulo 3",
        desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
        img: require("../../assets/images/slides/slide-3.png")
    }
];

const SlidesScreen = () => {
    const flatListRef = useRef<FlatList>(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [scrollEnabled, setscrollEnabled] = useState(false);

    const onScroll = ({
        nativeEvent
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = nativeEvent;
        // console.log(
        //     "contentOffset:",
        //     contentOffset.x,
        //     "layoutmeasures:",
        //     layoutMeasurement.width
        // );
        const currentIndex = Math.floor(
            contentOffset.x / (layoutMeasurement.width * 0.8)
        );

        // console.log("currentIndex:", currentIndex);

        setCurrentSlideIndex(currentIndex);

        if (!scrollEnabled) {
            setscrollEnabled(currentIndex === items.length - 1);
        }
    };

    const scrollSlide = ({ index }: { index: number }) => {
        if (!flatListRef.current) return;
        flatListRef.current.scrollToIndex({
            index: index,
            animated: true
        });
        setCurrentSlideIndex(index);
    };

    return (
        <>
            <ThemedView>
                <FlatList
                    ref={flatListRef}
                    horizontal
                    pagingEnabled
                    scrollEnabled={scrollEnabled}
                    showsHorizontalScrollIndicator={false}
                    data={items}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => <SlideItem item={item} />}
                    onScroll={onScroll}
                />
            </ThemedView>

            {currentSlideIndex === items.length - 1 && (
                <ThemedButton
                    onPress={() => router.dismiss()}
                    className="absolute bottom-12 right-5 w-40"
                >
                    Finalizar
                </ThemedButton>
            )}

            {currentSlideIndex <= items.length - 2 && (
                <ThemedButton
                    onPress={() =>
                        scrollSlide({ index: currentSlideIndex + 1 })
                    }
                    className="absolute bottom-12 right-5 w-40"
                >
                    Siguiente
                </ThemedButton>
            )}
        </>
    );
};
export default SlidesScreen;

interface SlideItemProps {
    item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
    const { width } = useWindowDimensions();
    const containerWidth = width * 0.87;
    const textColor = useThemeColor({}, "primary");
    const textForeground = useThemeColor({}, "foreground");
    const horizontalPadding = 20; // ajustar según el padding deseado
    const { title, desc, img } = item;

    return (
        <ThemedView
            style={{ width: containerWidth }} // usa el ancho del contenedor
            className="flex-1 rounded p-10 justify-center items-center"
        >
            <Image
                source={img} //* funciona porque item.img es un ImageSourcePropType
                style={{
                    width: width * 0.7,
                    height: width * 0.7,
                    resizeMode: "center",
                    alignSelf: "center"
                }}
            />
            <ThemedText
                type="h1"
                className="font-bold self-start"
                style={{ color: textColor }}
            >
                {title}
            </ThemedText>
            <ThemedText
                type="h2"
                className="mt-1 self-start"
                style={{
                    color: textForeground,
                    width: containerWidth - horizontalPadding, // ajusta el ancho con base en el contenedor
                    flexWrap: "wrap"
                }}
            >
                {desc}
            </ThemedText>
        </ThemedView>
    );
};
