import React, { useState, useCallback } from 'react';
import { StyleSheet, Linking } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { Layout, Text, Button } from '@ui-kitten/components';

const Youtube = () => {
    const [playing, setPlaying] = useState(false);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <Layout style={styles.container}>
            <YoutubePlayer
                height={300}
                play={playing}
                playList={"PL_jarfhtY-pWDUMidG3lDRtviJl6r8eUK"}
                playListStartIndex={0}
            />
            <Button
                style={styles.buttonContainer}
                onPress={togglePlaying}>
                {playing ? "Pause" : "Play"} 
            </Button>
        </Layout>
    );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Youtube;