import { makeStyles } from "@material-ui/core/styles";

import green from '@material-ui/core/colors/green';
import lightBlue from '@material-ui/core/colors/lightBlue';
import deepPurple from '@material-ui/core/colors/deepPurple';

export default makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
          margin: theme.spacing(1),
        },
    },
    Btn_group: {
      margin: '20px 0'
    },
    Btn_createBug: {
        fontSize: '0.935rem',
        margin: '0 5px',
        backgroundColor: lightBlue[500],
        color: '#FFF',
        '&:hover': {
            backgroundColor: lightBlue[400],
            color: '#FFF'
        }
    },
    Btn_completed: {
        fontSize: '0.935rem',
        margin: '0 5px',
        backgroundColor: green[500],
        color: '#FFF',
        '&:hover': {
            backgroundColor: green[400],
            color: '#FFF'
        }
    },
    Btn_Bug: {
        fontSize: '0.935rem',
        margin: '0 5px',
        backgroundColor: deepPurple[500],
        color: '#FFF',
        '&:hover': {
            backgroundColor: deepPurple[400],
            color: '#FFF'
        }
    },
    modal: {
        margin: "35px 0"
    }
    
}));