import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
 item: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
    fontWeight: "normal",
    paddingVertical: 2
  },
  selectedItem: {
    color: '#000',
    fontWeight: 'bold'
  },
  itemContainer: {
    marginBottom: 14,
    marginRight: 17,
  },
  selectedContainer: {
     borderBottomColor: '#4681A3',
    borderBottomWidth: 1
  },
  flatList: {
    paddingLeft: 10
  }
})

export default styles