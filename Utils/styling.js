import { StyleSheet } from 'react-native';

// For Home screen
export const homeStyles = StyleSheet.create({
    rowContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    colContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    button: {
      borderRadius: 20,
      width: '40%',
      height: '50%',
      margin: '5%',
    },
    header: {
      fontSize: 30,
      textAlign: 'center',
      paddingTop: '20%',
    },
  });

// For Connect, Laugh, Play, Reminise screens
export const optionStyles = StyleSheet.create({
    outerLargeContainer: {
      height: '200%',
      justifyContent: 'center',
    },
    outerAvgContainer: {
      height: '165%',
      justifyContent: 'center',
    },
    outerSmallContainer: {
      height: '100%',
      justifyContent: 'center',
    },

    rowContainer: {
      flexDirection: 'row',
    },
    colContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },

    icon: {
        height: '100%', 
        tintColor: '#FF4949',
    },
    iconContainer: {
        height: '10%', 
        paddingTop: '10%',
    },
    iconBiggerContainer: {
      height: '20%', 
      paddingTop: '10%',
  },

    button: {
      borderRadius: 20,
      width: '40%',
      height: '15%',
      margin: '5%',
    },
    buttonText: {
      textAlign: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },

    sectionHeader: {
      fontSize: 30,
      padding: '5%',
      paddingBottom: '10%',
      textAlign: 'center',
      fontWeight: '800',
      color: '#234971',
    },
});

export const circleButtonStyles = StyleSheet.create({
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