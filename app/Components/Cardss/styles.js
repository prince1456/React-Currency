import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create( {
  container:{
    backgroundColor: "#f1f1f1",
    height: '50%',
    marginHorizontal:20,
    // paddingHorizontal: 20,
    borderColor: '$black',
    borderWidth: 2,
    borderRadius: 15,
  },
  image: {
    height: 150,
    width:'100%',


  },
  titleBar :{
    height:40,
    borderTopLeftRadius: 15,

  },
  title: {
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: '500',
      // height: 40,
      color: '$black',
      textAlign: 'center'
  },
  description: {
    padding: 15,

  },
  desText:{
    fontSize: 16,
    color: "$black",

  }

})
