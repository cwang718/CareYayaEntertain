import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Layout, Text, Button, Card } from '@ui-kitten/components';
import { questions } from '../Utils/questions';
import { getRandomInt, getRandomQType } from '../Utils/helperFxns';
import RecordButton from '../Components/recordButton';
import { cardStyles } from '../Utils/styling';

const QuestionCardScreen = ({ route }) => {
    let qListSize = questions[route.params.qType].length;
    let [qIdx, setQIdx] = useState(getRandomInt(qListSize));
    let [topic, setTopic] = useState(route.params.qType);
    
    return (
      <ScrollView>
        <Layout style={cardStyles.outerContainer}>
            <Card style={cardStyles.cardContainer}>
                <Text style={cardStyles.text}>{questions[topic][qIdx]}</Text>
            </Card>
            <Button 
                style={cardStyles.button}
                status='warning'
                size='giant'
                onPress={() => {
                  if(route.params.random) {
                    setTopic(getRandomQType);
                  }
                  setQIdx(getRandomInt(questions[topic].length));
                }}>
                Another Question
            </Button>
        </Layout>
        <RecordButton />
      </ScrollView>
    )
}

export default QuestionCardScreen;