import EStyleSheet from 'react-native-extended-stylesheet'


const styles = EStyleSheet.create({
  containr:{
    alignItems: "center"
  },
  wrapper:{
    flexDirection: "row",
    alignItems:"center"
  },
  icon:{
    width:20,
    marginRight: 10
  },
  text:{
    color: "$white",
    fontWeight: "300",
    fontSize: 14,
    paddingVertical: 20
  }
});

export default styles;
