import { makeStyles } from "@material-ui/core";


export default makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: '15px',
        height: '100%',
        columns: "5, 320px",
        maxWidth: "600px",
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI"
      },
      container:{
          marginRight: 'auto',
          marginLeft: 'auto'
      },
      typography:{
        color: 'white',
        fontSize: '25px',
        fontWeight:'500'

      },
      card1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: '15px',
        padding:0,
        height: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: "600px",
        width:'200px',
        backgroundColor: "#1b333d",
        marginBottom: '10px'
      },
})