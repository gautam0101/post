import { useContext } from 'react';

import { Select, MenuItem, TextField, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import '../css/form.css';

import { DataContext } from '../context/DataProvider';

const useStyles = makeStyles({
    component: {
        marginTop:'10px',
        marginBottom:'10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight:'20px',
        paddingLeft:'20px'
    },
    select: {
        width: 150,
        height: 40,
        background: '#F6F6F6'
    },
    button: {
        width: 100,
        height: 40,
        marginLeft: [5, '!important']
    },
    textfield: {
        width: '100%',
        background: '#F6F6F6',
        border: 'none'
    }
})

const Form = ({ onSendClick }) => {
    const classes = useStyles();

    const { formData, setFormData } = useContext(DataContext);

    const onUrlChange = (e) => {
        setFormData({ ...formData, url: e.target.value });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, type: e.target.value });
    }

    return (
        <Box className={classes.component}>
            <Select className={classes.select} value={formData.type} label="POST" onChange={(e) => handleChange(e)}>
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </Select>
            
            <TextField size="small" id="outlined-basic" label="Enter your url here" variant="outlined" className={classes.textfield} onChange={(e) => onUrlChange(e)}/>
                <div className="btn-group">
                {/* <button type="button" className="btn sendbtn" variant="contained" onClick={() => onSendClick()}>Send</button>
                <button type="button" className="btn sendbtn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item"  href="#">Send & download</a>
                </div> */}
                </div>
            <Button className={classes.button} variant="contained" onClick={() => onSendClick()}>Send</Button>
        </Box>
    )
}

export default Form;