import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
 safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    // margin: 32,
  },
  subTitle: {
    color: '#000',
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold"
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  emptyComponent: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 40,
    color: 'rgba(0, 0, 0, 0.5)'
  }
})

export default styles