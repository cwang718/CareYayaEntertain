import React from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';
import { optionStyles } from '../../Utils/styling';

const Dance = () => {
    return (
        <ScrollView contentContainerStyle={optionStyles.outerSmallContainer}>
          <Layout style={optionStyles.iconBiggerContainer}>
            <Icon name='sun-outline' style={optionStyles.icon} />
          </Layout>

          <Layout>
            <Text style={optionStyles.subtitleHeader}>Put some music on and dance with them!</Text>
          </Layout>

          <Layout style={optionStyles.iconBiggerContainer}>
            <Icon name='music' style={optionStyles.biggerIcon} />
          </Layout>
        </ScrollView>
    )
}

export default Dance;