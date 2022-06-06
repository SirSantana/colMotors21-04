import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 10,
    display: 'flex',
    padding: '16px',
    maxWidth: '240px'
  },
 
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  container:{
    margin:0,
    padding:0,
  },
 
  card1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
    height: '60px',
    maxWidth: '512px',
    backgroundColor: " #1b333d",
    color: 'white',
    content: 'fit-content',
    marginBottom:"20px",
    paddingRight:'20px',

  },
  gridCotizacion:{
    [theme.breakpoints.down('xs')]: {
      paddingTop:'10px',
    }
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      margin:0,
    padding:0,
    width:"100vw"
    },
  },
 
  typography:{
    color: 'white',
    fontSize: '20px',
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    fontWeight:'600',
    marginLeft: '20px',
  },
  modal: {
    display: "block", /* Hidden by default */
  position: "fixed", /* Stay in place */
  zIndex: "1000", /* Sit on top */
  left: 0,
  top: 0,
  width: "100%", /* Full width */
  height: "100%", /* Full height */
  overflow: "auto", /* Enable scroll if needed */
  backgroundColor: "rgb(0,0,0)", /* Fallback color */
  backgroundColor: "rgba(0,0,0,0.4)", /* Black w/ opacity */

  },
  modalContent: {
    backgroundColor: "#fefefe",
    margin: "15% auto", /* 15% from the top and centered */
    padding: "20px",
    border: "1px solid #888",
    width: "80%", /* Could be more or less, depending on screen size */
  }
  ,
  /* The Close Button */
  close: {
    color: "#aaa",
    float: "right",
    fontSize: "28px",
    fontWeight: "bold",
  },
  
 

  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',

    margin:0,
    padding:0,
    width:"100vw"
    },
  },
  container:{
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    margin:0,
    padding:0
    },
  }
  
}));