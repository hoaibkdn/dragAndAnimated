import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  buttonGroup: {
    height:200,
    flexDirection: "row",
    paddingVertical: 50
  },
  row: {
    flexDirection: "row",
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },
  modalWrapper: {
    width: Metrics.screenWidth - 100,
    height: 300,
    backgroundColor: '#fff',
    justifyContent: "center",
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center'
  },
  modalInput: {
    width: Metrics.screenWidth - 150,
    height: 35,
    borderBottomColor: "#777",
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 17,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    position: 'relative',
    zIndex: 100,
    top: 0,
    left: 0,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  backgroundSize: {
    height: Metrics.screenHeight
  }
})
