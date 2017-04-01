import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...Platform.select({
      android: {
        paddingTop: 8,
      },
      ios: {
        borderTopWidth: 1,
        borderTopColor: '#e4e3e5',
        borderBottomWidth: 1,
        borderBottomColor: '#e4e3e5',
      },
    }),
  },
  item: {
    justifyContent: 'center',
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    ...Platform.select({
      android: {
        borderBottomColor: '#e6e6e6',
      },
      ios: {
        backgroundColor: 'white',
        borderBottomColor: '#e4e3e5',
      },
    }),
  },
  text: {
    ...Platform.select({
      android: {
        fontSize: 16,
      },
    }),
  },
});