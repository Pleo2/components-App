import { useState } from 'react';

import { ScrollView, RefreshControl } from 'react-native';

import ThemedText from '@/presentation/share/ThemedText';
import ThemedView from '@/presentation/share/ThemedView';

const PullToRefreshScreen = () => {

    const [isRefreshing, setIsRefreshing] = useState(false)
  return (
    <ScrollView
        refreshControl={
            <RefreshControl
                refreshing={ isRefreshing }
            />
        }
    >
        <ThemedView>
        <ThemedText>PullToRefreshScreen</ThemedText>
        </ThemedView>
    </ScrollView>

  );
};
export default PullToRefreshScreen;
