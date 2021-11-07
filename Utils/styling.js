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
    subtitleHeader: {
      fontSize: 30,
      padding: '10%',
      textAlign: 'center',
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

export const recordStyles = StyleSheet.create({
  recordStartButton: {
    padding: '20%',
    width: '70%',
    alignSelf: 'center',
  },
  recordStopButton: {
    padding: '20%',
    width: '70%',
    alignSelf: 'center',
    backgroundColor: '#FF4949',
    borderColor: '#FF4949',
  },

  container: {
    height: '100%',
  },
  buttonContainer: {
    padding: '5%',
  },
});

export const cardStyles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '90%',
    height: '55%',
    borderWidth: 3,
    backgroundColor: 'white',
  },
  outerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '15%',
  },
  button: {
    borderRadius: 20,
    width: '60%',
    height: '15%',
    margin: '5%',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  },
});