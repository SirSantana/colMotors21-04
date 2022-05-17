import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
export default makeStyles((theme)=>({
  media: {
    height: 0,
    paddingTop: '86.25%',
    backgroundColor: 'rgb(0, 0, 0, )',
    backgroundBlendMode: 'darken',
    justifyContent: 'space-between'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '90%',
  },
  typo:{
    fontSize: '20px',
    fontFamily: 'Helvetica',
    paddingRight:'20px',
      margin:0

},
  header1:{
    display:'flex',
     color:'white',
      marginBottom:'10px',
      padding:'10px 20px',
      alignItems:'center',
      flexDirection:'row', 
      justifyContent:'center', 
      backgroundColor:"#1b333d",
    borderRadius: "5px",

    }
  ,
  container:{
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '5px',
    height: '100%',
    padding: '0',
    justifyContent: 'center',
    margin:0,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',

      width:'84vw'
    }
  },
  paper2: {
    padding: theme.spacing(2),
    background:"#f50057",
    color: 'white',
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    justifyContent: 'center',
    marginBottom:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'400px',
    [theme.breakpoints.down('xs')]: {
      width:'300px',
      
      },

  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    padding: '0',
    position: 'relative',
    width:'100%',
    maxWidth:'350px',
    [theme.breakpoints.down('sm')]: {
  
        width:'84vw'
      }
    
  },
  card1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    marginBottom:'10px',
    padding: '10px',
    position: 'relative',
    minWidth: '230px',
  },
  
  purple: {
    color: 'black',
    height:'60px',
    width:'60px',
    padding:0,
    marginRight:'0'

  },
   purple2: {
    color: 'black',
    height:'25px',
    width:'25px',
    padding:'5px',
    margin:0,
    backgroundColor:'gray',
    color:'white'

  },
  typography1:{
    height: '50px',
    padding: '0',
    margin:'0'

  },
  subheader:{
    fontFamily: ' -apple-system, Segoe UI,',
    fontWeight:'500',
    color:'black',
    padding:0
  },
  typography:{
    fontWeight:'600',
    fontFamily: ' -apple-system, Segoe UI,',
    letterSpacing:'2px'
  },

  title:{
    fontFamily: ' -apple-system, Segoe UI,',
    fontWeight:'600',
    paddingRight:'10px',
    fontSize:'18px',
    lineHeight:'18px',
  },
  overlay: {
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
 
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'inline-flex',
    justifyContent: 'space-between',

  },
  header:{
    color:'#1b333d',
    fontFamily:"--apple-system, Segoe UI",
    padding:'4px',
    paddingTop:'8px',
    margin:0

  },
  typography:{
    padding: '0',
    margin:'0',
    fontSize: '18px',
    fontWeight:'500'

  },
  typography1:{
    paddingTop: '4px',
    margin:'0',
    fontSize: '16px',
    lineHeight:'1rem',
    fontWeight:'400'
  },
  cotizarr:{
    marginLeft:'20px',
    minWidth:'280px',
    [theme.breakpoints.down('sm')]: {
      marginLeft:'0',
      minWidth:'250px',
  
    }
  }
  ,
  button:{
    alignItems:'bottom',
    width:'fit-content',
    padding: '0 10px',
    marginLeft:'0',
    marginTop:'15px'
  },
  cotizar:{
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom: '15px'
  }
  
}));