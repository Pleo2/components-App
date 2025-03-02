import ThemedText from '@/presentation/share/ThemedText';
import ThemedView from '@/presentation/share/ThemedView';
import { ImageSourcePropType, FlatList } from 'react-native';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../../assets/images/slides/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../../assets/images/slides/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../../assets/images/slides/slide-3.png'),
    },
];

const SlidesScreen = () => {
    return (
        <ThemedView>
            <FlatList data={items} keyExtractor={(item) => item.title} renderItem={({ item }) => (
                <ThemedText className='w-64'>{item.title}</ThemedText>
            )}
                horizontal
                pagingEnabled
            />
        </ThemedView>
    );
};
export default SlidesScreen;
