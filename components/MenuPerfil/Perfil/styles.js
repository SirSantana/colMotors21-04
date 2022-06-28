import { makeStyles } from "@material-ui/core";
import { textAlign } from "@material-ui/system";


export default makeStyles((theme)=>({
  
    card: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        height: '100%',
        width: "30%",
        justifyContent: 'center',
        padding:'0',
        marginRight: 'auto',
        marginLeft: 'auto',
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI",
        [theme.breakpoints.down("sm")]: {
          width:'100%',

        },
      },
      heading: {
        marginTop:'8px',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: 600,
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI,',
        color:'black',
        [theme.breakpoints.down('sm')]: {
          fontSize: '25px',
        }
      },
      container:{
        display:'flex', flexDirection:'row',width:'70%', justifyContent:'flex-end',
        [theme.breakpoints.down('sm')]: {
          width:'80vw',
          flexDirection:'column'
        }
      },
      typography:{
        color: 'black',
        fontSize: '16px',
        fontWeight:'500',


      },
      img:{
        width:'30px',
        height:'25px',
        color:'black',
        marginTop:'8px',
        marginRight:'20px'
      },
      iconStar:{
        color:"#EABE3F"
      },
      header:{
        color:'#f1f1f1',
        fontFamily:"--apple-system, Segoe UI",
        padding:'4px',
        margin:0,
        display:'flex',
        flexDirection:'column',
        backgroundColor: "gray"  
      },
      transparent :{
        backgroundColor:" #f1f1f1",
    },
    
      title2:{
        fontFamily: ' -apple-system, Segoe UI,',
        fontWeight:'600',
        paddingRight:'10px',
        fontSize:'22px',
        lineHeight:'18px',
        color:'#f1f1f1',
        textAlign:'center'
      },
      purple: {
        color: 'white',
        height:'50px',
        width:'50px',
        padding:0,
        marginBottom:'10px',
    
      },
      iconAdd:{
        position:'absolute', 
        top:'165px', 
        marginLeft:'270px', 
        color:'white', 
        cursor:'pointer',
        [theme.breakpoints.down("sm")]: {
          top:'35%', 
          marginLeft:'70%',
        }
      },
      card1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: '5px',
        padding:'5px',
        height: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
        width:'600px',
        backgroundColor: "#1b333d",
        marginBottom: '10px',
        [theme.breakpoints.down("sm")]: {
          width:'95%',
        },
        subheader2:{
          color:'#f1f1f1',
          fontFamily: '-apple-system, Segoe UI,',
          display:'flex',
          textAlign:'center', variant: "body1", color:'#f1f1f1'
        },
       
},
        
}))