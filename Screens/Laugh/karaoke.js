import React from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';
import { optionStyles } from '../../Utils/styling';

const Karaoke = () => {
    return (
        <ScrollView contentContainerStyle={optionStyles.outerSmallContainer}>
          <Layout style={optionStyles.iconBiggerContainer}>
            <Icon name='sun-outline' style={optionStyles.icon} />
          </Layout>

          <Layout>
            <Text style={optionStyles.subtitleHeader}>Put on a song they know and sing together!</Text>
          </Layout>

          <Layout style={optionStyles.iconBiggerContainer}>
            <Icon name='volume-down' style={optionStyles.icon} />
          </Layout>
        </ScrollView>
    )
}

export default Karaoke;