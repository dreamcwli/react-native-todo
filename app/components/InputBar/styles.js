import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        height: 56,
        elevation: 4,
      },
      ios: {
        paddingTop: 8,
        paddingBottom: 8,
      },
    }),
  },
  text: {
    flex: 1,
    marginRight: 16,
    ...Platform.select({
      android: {
        fontSize: 16,
      },
    }),
  },
});