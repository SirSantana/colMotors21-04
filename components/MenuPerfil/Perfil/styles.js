import { makeStyles } from "@material-ui/core";


export default makeStyles((theme)=>({
    card: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        height: '100%',
        width: "600px",
        justifyContent: 'center',
        padding:'0',
        marginRight: 'auto',
        marginLeft: 'auto',
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI",
        [theme.breakpoints.down("sm")]: {
          width:'80vw',

        },
      },
      
      typography:{
        color: 'white',
        fontSize: '20px',
        fontWeight:'600'

      },
      iconStar:{
        color:"#EABE3F"
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
},
}))