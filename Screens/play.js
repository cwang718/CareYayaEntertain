import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { gameTypes } from '../Utils/games';
import { CircleButton } from '../Components/circleButton';
import { getRandomGameType, getRandomQType } from '../Utils/helperFxns';
import { optionStyles } from '../Utils/styling';

const PlayScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={optionStyles.outerContainer}>
          <Layout>
              <Text style={optionStyles.header}>CareYaya Entertain</Text>
          </Layout>

          <Layout>
            <Text style={optionStyles.sectionHeader}>PLAY</Text>
          </Layout>

          <Layout style={optionStyles.colContainer}>
            {gameTypes.map((type) => {
              return <Button 
                      key={type}
                      style={optionStyles.button}
                      size='giant'
                      onPress={() => navigation.navigate(type,{})}>
                      <Text style={optionStyles.buttonText}>{type}</Text>
                    </Button>
            })}
          </Layout>
          <CircleButton label='Random' getType={getRandomGameType} navigation={navigation} />
        </ScrollView>
    )
}

export default PlayScreen;