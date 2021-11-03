import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';

const styles = StyleSheet.create({
    bottomContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30%',
        padding: '10%',
        paddingBottom: '30%',
    },
    roundButton: {
        marginTop: 20,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
      },
});

export const CircleButton = (props) => {
    const { label, getType, navigation } = props;

    return (
        <Layout style={styles.bottomContainer}>
              <Button 
                status='danger'
                style={styles.roundButton}
                size='giant'
                onPress={() => navigation.navigate(getType())}>
                {label}
              </Button>
        </Layout>
    );
}
