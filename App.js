import React from 'react';
import { Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Carousel from 'react-native-snap-carousel';

export default function App() {
  const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        data={[{}, {}]}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth*.8}
        renderItem={(item, index) => {
          return (
            <View style={{ flex: 1, borderWidth: 1, borderColor: "red" }}>
                <Video
                  source={{
                      uri: 'http://myplaceonline.com/frontend/BigBuckBunnyCut.mp4',
                  }}
                  resizeMode={Video.RESIZE_MODE_CONTAIN}
                  shouldPlay={false}
                  isLooping={false}
                  style={{
                    width: (viewportWidth*.8)-5,
                    height: viewportHeight,
                  }}
                  useNativeControls={true}
                />
            </View>
          );
        }}
      />
    </View>
  );
}
