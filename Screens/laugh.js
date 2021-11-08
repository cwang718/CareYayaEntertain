import React from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';
import { laughTypes } from '../Utils/laughs';
import { CircleButton } from '../Components/circleButton';
import { getRandomGameType } from '../Utils/helperFxns';
import { optionStyles } from '../Utils/styling';

const LaughScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={optionStyles.outerLargeContainer}>
          <Layout style={optionStyles.iconContainer}>
            <Icon name='sun-outline' style={optionStyles.icon} />
          </Layout>

          <Layout>
            <Text style={optionStyles.sectionHeader}>LAUGH</Text>
          </Layout>

          <Layout style={optionStyles.colContainer}>
            {laughTypes.map((type) => {
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

export default LaughScreen;