import { useThemeColor } from '@/hooks/useThemeColor';
import FadeInImage from '@/presentation/images/FadeInImage';
import ThemedText from '@/presentation/share/ThemedText';
import ThemedView from '@/presentation/share/ThemedView';
import { useState } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const InfiniteScrollScreen = () => {
    const [numbers, setnumbers] = useState([1, 2, 3, 4]);
    const primaryColor = useThemeColor({}, 'primary')
    const loadMoreNumbers = () => {
        const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);
        setTimeout(() => {
            setnumbers([...numbers, ...newArray]);
        }, 300);
    }
    return (
        <ThemedView>
            <FlatList
                data={numbers}
                style={{ borderRadius: 12, marginInline: 12, marginBottom: 24 }}
                renderItem={({ item }) => <FadeInImage style={{
                    height: 400,
                    width: '100%',
                    borderRadius: 12,
                    marginBlock: 12,
                }} uri={`https://picsum.photos/id/${item}/500/400`} />}
                onEndReached={loadMoreNumbers}
                onEndReachedThreshold={0.6} // al 60% del scroll empieza a cargar la siguiente tanda
                ListFooterComponent={() => (
                    <View className='h-40 , justify-center'>
                        <ActivityIndicator size={40} color={primaryColor}></ActivityIndicator>
                    </View>
                )}
            />
        </ThemedView>
    );
};

export default InfiniteScrollScreen;
