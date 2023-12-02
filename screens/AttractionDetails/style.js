import { Dimensions, StyleSheet } from "react-native";

const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
  safeArea: {
    margin: 32
  },
  mainImage: {
    width: '100%',
    height: height/2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 22,
    paddingLeft: 16
  },
  gallery: {
     width: '100%',
     height: 67
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  footer:{
  flexDirection: 'row',
  },
  icon:{
    width: 42,
    height: 42
  }
})

export default styles