import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Button, Text } from '@ui-kitten/components';
import { Audio } from 'expo-av';
import { RecordIcon, StopIcon, PlayIcon } from '../Utils/icons';
import { recordStyles } from '../Utils/styling';

const RecordButton = () => {
  const [recording, setRecording] = useState();
  const [sound, setSound] = useState();
  const [recordingUri, setRecordingUri] = useState();

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 
    console.log('Recording stopped and stored at', uri);
    setRecordingUri(uri);
  }

  async function playRecording() {
    const { sound } = await Audio.Sound.createAsync({uri: recordingUri,})
                                       .then(setSound(sound))
                                       .then(console.log("New sound set"));
    await sound.playAsync();
    console.log("Playing sound");
  }

  return (
    <Layout style={recordStyles.container}>
        <Layout style={recordStyles.buttonContainer}>
            {recording ? 
            (<Button 
                style={recordStyles.recordStopButton}
                size='giant'
                onPress={stopRecording}
                accessoryLeft={StopIcon}>
                Stop Recording
            </Button>)
            :
            (<Button 
                style={recordStyles.recordStartButton}
                size='giant'
                onPress={startRecording}
                accessoryLeft={RecordIcon}>
                Start Recording
            </Button>)
            }
        </Layout>

        <Layout style={recordStyles.buttonContainer}>
        {recordingUri ? 
        (<Button 
            style={recordStyles.recordStartButton} 
            size='giant' 
            accessoryLeft={PlayIcon}
            onPress={playRecording}>
            Play Recording
        </Button>) 
        :
        <Text></Text>
        }
        </Layout>
    </Layout>
  );
}

export default RecordButton;