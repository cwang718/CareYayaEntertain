import React from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';
import { questionTypes } from '../Utils/questions';
import { getRandomQType } from '../Utils/helperFxns';
import { CircleButton } from '../Components/circleButton';
import { optionStyles } from '../Utils/styling';

const ConnectScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={optionStyles.outerAvgContainer}>
          <Layout style={optionStyles.iconContainer}>
            <Icon name='people-outline' style={optionStyles.icon} />
          </Layout>

          <Layout>
            <Text style={optionStyles.sectionHeader}>ASK ABOUT</Text>
          </Layout>

          <Layout style={optionStyles.colContainer}>
            {questionTypes.map((type) => {
              return <Button 
                      key={type}
                      style={optionStyles.button}
                      size='giant'
                      onPress={() => navigation.navigate('Question Card', 
                                      {qType: type, 
                                      random: false}
                              )}>
                      {type}
                    </Button>
            })}
          </Layout>
          
          <CircleButton 
            label='Random' 
            getType={getRandomQType}
            navToQCard={true}
            navigation={navigation} />
        </ScrollView>
    )
}

export default ConnectScreen;