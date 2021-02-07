import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

import green from '@material-ui/core/colors/green';
import lightBlue from '@material-ui/core/colors/lightBlue';
import deepPurple from '@material-ui/core/colors/deepPurple';


export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: '10px',
    },
    brandContainer: {
        display: "flex",
        alignItems: "center",
        padding: "10px 0px"
    },
    image: {
        marginLeft: "15px",
        marginRight: "10px"
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
    },
    profile: {
        display: "flex",
        justifyContent: "space-between",
        width: "325px"
    },
    blue: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
    },
    userName: {
        display: "flex",
        alignItems: "center",
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
    Btn_completed: 
    {
        fontSize: '0.935rem',
        margin: '0 5px',
        backgroundColor: green[500],
        color: '#FFF',
        '&:hover': {
            backgroundColor: green[400],
            color: '#FFF'
        }
    },
    Btn_Bug: 
    {
        fontSize: '0.935rem',
        margin: '0 5px',
        backgroundColor: deepPurple[500],
        color: '#FFF',
        '&:hover': {
            backgroundColor: deepPurple[400],
            color: '#FFF'
        }
    },
    
}));