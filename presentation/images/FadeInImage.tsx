import useAnimation from '@/hooks/useAnimation';
import { useState } from 'react'
import { ActivityIndicator, Animated, Image, ImageStyle, StyleProp, View } from 'react-native'
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

interface Props {
    uri: string,
    style: StyleProp<ImageStyle>,
}


const FadeInImage = ({ uri, style }: Props) => {
    const [imgIsLoaded, setimgIsLoaded] = useState(true);
    const { animatedOpacity, fadeIn } = useAnimation();
    return (
        <Animated.View className="justify-center items-center">
            {imgIsLoaded &&
                <ActivityIndicator
                    style={{ position: 'absolute' }}
                    color={'gray'}
                    size={30}
                />
            }
            <Animated.Image
                source={{ uri: uri }}
                style={[style, {opacity: animatedOpacity}]}
                onLoadEnd={() => {
                    setimgIsLoaded(false);
                    fadeIn({duration: 500});
                }}
            />
        </Animated.View>

    )
}
export default FadeInImage
