import { makeStyles } from "@material-ui/core";


export default makeStyles((theme)=>({
    card: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        height: '100%',
        columns: "5, 320px",
        maxWidth: "600px",
        padding:'0',
        width:'300px',
        margin:0,
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI",
        [theme.breakpoints.down("sm")]: {
          margin:0,
          width: "95%",
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
        width:'300px',
        backgroundColor: "#1b333d",
        marginBottom: '10px'
},
}))