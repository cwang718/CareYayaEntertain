import React from 'react';
import { Button, Layout } from '@ui-kitten/components';
import { circleButtonStyles } from '../Utils/styling';

// Creates circular button using label and function passed in through props
export const CircleButton = (props) => {
    const { label, getType, navToQCard, navigation } = props;

    // In Connect screen, retrieves random question
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

    // In another screens, retrieves random type of topic/action depending on screen
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
