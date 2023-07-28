import {StyleSheet} from 'react-native';

export const welcome_scree_dark = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#000',
        height:'100%'
    },
  headingContainer: {
    textAlign: 'center',
    color:'#e9ecef',
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonContainer:{
    // justifyContent:'center',
    // alignItems:'center',
    // borderWidth:1,
    // borderColor:'#b8b8ff',
    // margin:'40%',
  },
  touchContainer:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#b8b8ff',
    margin:'38%',
    padding:'5%',
    borderRadius:100
  },
  buttonText:{
    fontSize:20,
    color:'#e9ecef',
    fontWeight:'bold'
  }
});

export const welcome_scree_light = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#fff',
        height:'100%'
    },
    headingContainer: {
        textAlign: 'center',
        color:'#495057',
        fontSize: 40,
        fontWeight: 'bold',
      },
      buttonContainer:{
        // justifyContent:'center',
        // alignItems:'center',
        // borderWidth:1,
        // borderColor:'#b8b8ff',
        // margin:'40%',
      },
      touchContainer:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#b8b8ff',
        margin:'38%',
        padding:'5%',
        borderRadius:100
      },
      buttonText:{
        fontSize:20,
        color:'#495057',
        fontWeight:'bold'
      }
});
