import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button, Card } from '@ui-kitten/components';
import { default as theme } from '../custom-theme.json';
import { questionTypes, questions } from '../Utils/questions';
import { getRandomInt, getRandomQType } from '../Utils/helperFxns';

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '90%',
    height: '50%',
    borderWidth: 3,
  },
  outerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: '15%',
  },
  button: {
    borderRadius: 100,
    width: '30%',
    height: '25%',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

const QuestionCardScreen = ({ route, navigation }) => {
    let qListSize = questions[route.params.qType].length;
    let [qIdx, setQIdx] = useState(getRandomInt(qListSize));
    let [topic, setTopic] = useState(route.params.qType);
    
    return (
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Layout style={styles.outerContainer}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{questions[topic][qIdx]}</Text>
            </Card>
            <Button 
                style={styles.button}
                onPress={() => {
                  if(route.params.random) {
                    setTopic(getRandomQType);
                  }
                  setQIdx(getRandomInt(questions[topic].length));
                }}
                >
                {`Another\nQuestion`}
            </Button>
        </Layout>
      </ApplicationProvider>
    )
}

export default QuestionCardScreen;