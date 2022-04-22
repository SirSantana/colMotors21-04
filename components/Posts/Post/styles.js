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
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    padding: '0',
    position: 'relative',
  },
  card1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadiusTop: '15px',
    height: '5px',
    columns: "5, 320px",
    fontFamily:'-apple-system',
    backgroundColor: "#1b333d",
    color: 'white',
    white: '100%'
  },
  purple: {
    color: 'black',
    height:'80px',
    width:'80px',
    padding:0,
    margin:0

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

  },

  title:{
    fontFamily: ' -apple-system, Segoe UI,',
    fontWeight:'600',
    padding:0,
    fontSize:'20px'
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
    backgroundColor:'gray',
    color:'#f1f1f1',
    fontFamily:"--apple-system, Segoe UI",
    padding:'2px'

  },
  typography:{
    padding: '0',
    margin:'0',
    fontSize: '19px',

  },
  button:{
    alignItems:'bottom',
    width:'fit-content',
    padding: '0 10px',
    marginLeft:'0',
    marginTop:'15px'
  },
  cotizar:{
    backgroundColor: "#2f7c9c"
  },
  
}));