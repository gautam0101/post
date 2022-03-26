

import { Typography, Box, TextareaAutosize } from "@mui/material"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    component: {
        marginTop:'10px',
        marginBottom:'10px',
        alignItems: 'center',
        
        justifyContent: 'space-between',
        paddingRight:'20px',
        paddingLeft:'20px'
    },
    error:{
       textAlign:'center',
    }
})

const textareaStyle = { 
    width: '100%', 
    padding: 10,  
    // background: `url(http://i.imgur.com/2cOaJ.png)`,
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    paddingLeft: 35,
    paddingTop: 10,
    borderColor: '#ccc' 
}

const Response = ({ data }) => {
    const classes = useStyles();
    let obj = data;
    
    let readableobj = '{ \n';
    for(let key in obj) {
        readableobj += '\t'
        readableobj += (typeof obj[key] === "string")? `${key}: "${obj[key]}"` : `${key}: ${obj[key]}`; 
        if (Object.keys(obj).pop() !== key.toString()) {
            readableobj += ',\n'
        }
    }
    readableobj += '\n}';

    return (
        <Box className={classes.component}>
            <Typography mt={2} mb={2}>Response</Typography>
            {/* <div className={classes.error}>
                <img src='./images/download.png'/>
            </div> */}
            
            <TextareaAutosize 
                minRows={3}
                maxRows={15}
                style={textareaStyle}
                disabled="disabled"
                value={readableobj}
            />
        </Box>
    )
}

export default Response;