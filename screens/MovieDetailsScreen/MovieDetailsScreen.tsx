import * as React from 'react';
import styles from './styles';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import movie from '../../assets/data/movie';
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import EpisodeItem from '../../components/EpisodeItem';

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];

const MovieDetailsScreen = () => {
  return (
    <View>
      <Image source={{ uri: firstEpisode.poster }} style={styles.image} />

      <FlatList
        style={{ marginBottom: 250 }}
        data={firstSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name='hd' size={24} color={'white'} />
            </View>

            <Pressable
              onPress={() => console.warn('play')}
              style={styles.playBtn}>
              <Text style={styles.playBtnTxt}>
                <Entypo name='controller-play' size={16} color={'black'} />
                Play
              </Text>
            </Pressable>

            <Pressable
              onPress={() => console.warn('play')}
              style={styles.downloadBtn}>
              <Text style={styles.downloadBtnTxt}>
                <AntDesign name='download' size={16} color={'white'} /> Download
              </Text>
            </Pressable>

            <Text style={{ marginVertical: 10, color: 'white' }}>
              {movie.plot}
            </Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                <AntDesign name='plus' size={24} color={'white'} />
                <Text style={{ color: 'darkgrey', marginTop: 5 }}>My List</Text>
              </View>

              <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                <Feather name='thumbs-up' size={24} color={'white'} />
                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                <Ionicons name='share-social' size={24} color={'white'} />
                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Share</Text>
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
