import React from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Icon } from '@ui-kitten/components';
import RecordButton from '../../Components/recordButton';
import { optionStyles } from '../../Utils/styling';

const Photos = () => {
    return (
        <ScrollView contentContainerStyle={optionStyles.outerSmallContainer}>
          <Layout style={optionStyles.iconBiggerContainer}>
            <Icon name='book-open-outline' style={optionStyles.icon} />
          </Layout>

          <Layout>
            <Text style={optionStyles.subtitleHeader}>Ask if they can walk through a photo album with you!</Text>
          </Layout>

          <RecordButton />
        </ScrollView>
    )
}

export default Photos;