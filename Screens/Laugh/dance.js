import React from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';
import { optionStyles } from '../../Utils/styling';

// Screen instructing caretaker to dance with senior
const Dance = () => {
    return (
        <ScrollView contentContainerStyle={optionStyles.outerSmallContainer}>
          <Layout style={optionStyles.iconBiggerContainer}>
            <Icon name='sun-outline' style={optionStyles.icon} />
          </Layout>

          <Layout>
            <Text style={optionStyles.sectionHeader}>Put some music on and dance with them!</Text>
            <Text style={optionStyles.subtitleHeader}>(e.g. square-dancing, ballroom, salsa, freestyle)</Text>
          </Layout>

          <Layout style={optionStyles.iconBiggerContainer}>
            <Icon name='music' style={optionStyles.icon} />
          </Layout>
        </ScrollView>
    )
}

export default Dance;