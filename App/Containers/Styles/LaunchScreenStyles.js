import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1
  },
  buttonGroup: {
    height:200,
    flexDirection: "row",
    paddingVertical: 50
  },
  row: {
    flexDirection: "row"
  },
  dropZone: {
    height: 200,
    backgroundColor: "#00334d"
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
  }
})
