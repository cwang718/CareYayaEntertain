import React from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';
import { gameTypes } from '../Utils/games';
import { CircleButton } from '../Components/circleButton';
import { getRandomGameType } from '../Utils/helperFxns';
import { optionStyles } from '../Utils/styling';

const PlayScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={optionStyles.outerLargeContainer}>
          <Layout style={optionStyles.iconContainer}>
            <Icon name='layers-outline' style={optionStyles.icon} />
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
          
          <CircleButton 
            label='Random' 
            getType={getRandomGameType}
            navToQCard={false}
            navigation={navigation} />
        </ScrollView>
    )
}

export default PlayScreen;