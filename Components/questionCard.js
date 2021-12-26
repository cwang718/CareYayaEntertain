import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button, Card } from '@ui-kitten/components';
import { questions } from '../Utils/questions';
import { getRandomInt, getRandomQType } from '../Utils/helperFxns';
import RecordButton from '../Components/recordButton';
import { cardStyles } from '../Utils/styling';

// Creates card with question for caretaker to ask
const QuestionCardScreen = ({ route }) => {
    let { qType, random } = route.params;
    // States allow card to have randomized question and/or topic depending on button pressed
    let [qIdx, setQIdx] = useState(getRandomInt(questions[qType].length));
    let [topic, setTopic] = useState(qType);
    
    return (
      <ScrollView>
        <Layout style={cardStyles.outerContainer}>
            <Card style={cardStyles.cardContainer}>
              <Text>{topic}</Text>
              {random ? 
              (<Text style={cardStyles.text}>{questions[topic][getRandomInt(questions[topic].length)]}</Text>)
              :
              (<Text style={cardStyles.text}>{questions[qType][qIdx]}</Text>)
              }
            </Card>
            <Button 
                style={cardStyles.button}
                status='warning'
                size='giant'
                onPress={() => {
                  if(random) {
                    setTopic(getRandomQType());
                  } else {
                    setQIdx(getRandomInt(questions[qType].length));
                  }
                }}>
                Another Question
            </Button>
        </Layout>
        <RecordButton />
      </ScrollView>
    )
}

export default QuestionCardScreen;