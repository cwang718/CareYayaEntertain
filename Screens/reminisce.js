import React from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';
import { CircleButton } from '../Components/circleButton';
import { remTypes } from '../Utils/reminisces';
import { getRandomRemType } from '../Utils/helperFxns';
import { optionStyles } from '../Utils/styling';

const ReminisceScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={optionStyles.outerSmallContainer}>
          <Layout style={optionStyles.iconBiggerContainer}>
            <Icon name='camera-outline' style={optionStyles.icon} />
          </Layout>

          <Layout>
            <Text style={optionStyles.sectionHeader}>REMINISCE ON</Text>
          </Layout>

          <Layout style={optionStyles.colContainer}>
            {remTypes.map((type) => {
              return <Button 
                      key={type}
                      style={optionStyles.button}
                      size='giant'
                      onPress={() => navigation.navigate(type, 
                                      {}
                              )}>
                      {type}
                    </Button>
            })}
          </Layout>

          <CircleButton 
            label='Random' 
            getType={getRandomRemType}
            navToQCard={false}
            navigation={navigation} />
        </ScrollView>
    )
}

export default ReminisceScreen;