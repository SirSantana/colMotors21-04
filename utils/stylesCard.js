
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    card:{
        height:'fit-content',
        display:'flex',
        flexDirection:'column',
        width:'100%',
        maxWidth:'300px',
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:'10px',
        [theme.breakpoints.down('xs')]: {
          maxWidth:'90vw',
          
          },
    },
    img: {
      borderRadius: "10px",
      height: "250px",
      width: "100%",
      margin: "0",
      objectFit:'cover',
      marginTop:'10px',
      
    },
    container:{
        backgroundColor:'none',
        
    },
    title:{
        fontSize:'20px',
        fontWeight:'600',
        lineHeight:'18px',
        
    },
    purple: {
        color: 'black',
        height:'60px',
        width:'60px',
        padding:0,
        marginRight:'0'
    
      },
    cotizar:{
        width:'90%',
        margin:'0 auto',
        marginBottom:'20px'
        
      },
      cotizar1:{
        width:'100%',
        marginBottom:'20px',
        justifyContent:'center',
        alignItems:'center'
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
      header:{
        color:'#1b333d',
        fontFamily:"--apple-system, Segoe UI",
        padding:'4px',
        margin:0
    
      },
}))