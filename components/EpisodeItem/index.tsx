import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

interface EpisodeItemProps {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
}
const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode } = props;

  return (
    <View style={{marginVertical: 10}}>
      <View style={styles.row}>
        <Image source={{ uri: episode.poster }} style={styles.image} />

        <View style={styles.titleContainer}>
            <Text style={styles.title}>{episode.title}</Text>
            <Text style={styles.duration}>{episode.duration}</Text>
        </View>

        <AntDesign name='download' size={16} color={'white'} /> 
      </View>


      <Text style={styles.plot}>{episode.plot}</Text>
    </View>
  );
};

export default EpisodeItem;
