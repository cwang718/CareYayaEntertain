import React from 'react';
import { Button, Layout } from '@ui-kitten/components';
import { circleButtonStyles } from '../Utils/styling';

export const CircleButton = (props) => {
    const { label, getType, navToQCard, navigation } = props;

    // In Connect screen
    if(navToQCard) {
        return (
            <Layout style={circleButtonStyles.bottomContainer}>
                <Button 
                    status='danger'
                    style={circleButtonStyles.roundButton}
                    size='giant'
                    onPress={() => navigation.navigate('Question Card',
                                        {qType: getType(), 
                                        random: true})}>
                    {label}
                </Button>
            </Layout>
        );

    // In another screen
    } else {
        return (
            <Layout style={circleButtonStyles.bottomContainer}>
                <Button 
                    status='danger'
                    style={circleButtonStyles.roundButton}
                    size='giant'
                    onPress={() => navigation.navigate(getType())}>
                    {label}
                </Button>
            </Layout>
        );
    }
    
}
