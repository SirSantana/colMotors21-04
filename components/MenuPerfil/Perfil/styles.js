import { makeStyles } from "@material-ui/core";


export default makeStyles((theme)=>({
    card: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        height: '100%',
        maxWidth: "600px",
        padding:'0',
        marginRight: 'auto',
        marginLeft: 'auto',
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI",
        [theme.breakpoints.down("sm")]: {
          margin:0,
        },
      },
      
      typography:{
        color: 'white',
        fontSize: '25px',
        fontWeight:'600'

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
        maxWidth: "600px",
        backgroundColor: "#1b333d",
        marginBottom: '10px',
},
}))