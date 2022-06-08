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
    [theme.breakpoints.down('sm')]: {
      marginTop:'20px',
      }
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
      gap:'15px',
      width:'84vw',
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
  divPrevPosts:{
    [theme.breakpoints.down('xs')]: {
        gap:'20px'      
      },

  },
  typo:{
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    fontWeight:'600',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  },
  paper3: {
    padding: theme.spacing(2),
    background:"#464646",
    color: 'white',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI,',
    justifyContent: 'center',
    marginBottom:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'200px',
    flexDirection:'column',
    marginLeft:'40px',
    height:'180px',
    [theme.breakpoints.down('xs')]: {
      width:'90%',
      marginLeft:0,
      marginTop:'20px'
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
    minWidth:'280px',
    maxWidth:'350px',
    [theme.breakpoints.down('sm')]: {
        width:'84vw',
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
    color:'white',
    backgroundColor:'#464646',
  },
  
  purple: {
    color: 'black',
    height:'60px',
    width:'60px',
    padding:0,
    marginRight:'0'

  },
   purple2: {
    margin:0,
    backgroundColor: '#949494',
    color:'white',
    fontSize:'16px'

  },
  typography1:{
    height: '50px',
    padding: '0',
    margin:'0'

  },
  subheader:{
    fontFamily: ' -apple-system, Segoe UI,',
    fontWeight:'500',
    color:'white',
    padding:0,
  },
  subheader2:{
    fontFamily: ' -apple-system, Segoe UI,',
    fontWeight:'500',
    color:'black',
    padding:0,
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
    color:'white'
  },
  title2:{
    fontFamily: ' -apple-system, Segoe UI,',
    fontWeight:'600',
    paddingRight:'10px',
    fontSize:'18px',
    lineHeight:'18px',
    color:'black'
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
    marginLeft:'90px',
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
    marginBottom: '15px',
  },
  cotizar1:{
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom: '15px',
    backgroundColor: "#949494",
    color:'white',
    marginTop:'10px'
  },
  comentarios:{
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom: '15px',
    backgroundColor: "#949494",
    color:'white',
    marginTop:'10px'
  },
  containerComents:{
    width:"90%", 
    background:'#949494', 
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center', 
    marginLeft:'auto', 
    marginRight:'auto', 
    marginTop:'10px',
    flexDirection:'column'
  },
  card2: {
    width:'97%',
    margin: "0",
    textAlign: "left",
    color: "#f1f1f1",
    justifyContent: "center",
    textDecoration: "none",
    borderRadius: "10px",
    backgroundColor:'#f1f1f1',
  },
  
}));