import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efeff4',
    ...Platform.select({
      ios: {
        marginTop: 20,
      },
    }),
  },
  list: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: 16,
        marginBottom: 16,
      },
    }),
  },
});