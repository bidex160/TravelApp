import { StyleSheet, Dimensions } from "react-native"
const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
 card: {
    borderRadius: 15,
     borderWidth: 1,
     borderColor: '#E2E2E2',
    backgroundColor: '#FFF',
    padding: 4
  },
  title: {
     fontWeight: 600,
     color: '#000',
     fontSize: 12,
     paddingLeft: 6,
     marginTop: 12

  },
  subTitle: {
     fontWeight: 300,
     color: 'rgba(0, 0, 0, 0.50)',
     fontSize: 8,
  },
  image: {
    width: (width - 96) /2 ,
    height: 120,
    borderRadius:15

  },
  row: {
     flexDirection: 'row',
       marginBottom:12,
     marginTop: 5,
      paddingLeft: 6,
      alignItems: 'center'
  },
  icon: {
     height: 8,
     width: 8,
     marginRight: 3
  }
})

export default styles