import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';

export default function App() {
  const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");
  return (
    <View style={{flex: 1, borderWidth: 1, borderColor: "#000" }}>
      <VideoPlayer
        videoProps={{
          source: {
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          },
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          shouldPlay: false,
          isLooping: false,
          width: "100%",
          height: "100%",
        }}
        inFullscreen={false}
      />
    </View>
  );
}
