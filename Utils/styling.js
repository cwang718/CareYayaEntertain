import { StyleSheet } from 'react-native';

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

export const optionStyles = StyleSheet.create({
    rowContainer: {
      flexDirection: 'row',
    },
    colContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    outerContainer: {
      height: '200%',
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
    header: {
      fontSize: 20,
      textAlign: 'center',
      paddingTop: '10%',
    },
    sectionHeader: {
      fontSize: 20,
      padding: '10%',
    },
  });