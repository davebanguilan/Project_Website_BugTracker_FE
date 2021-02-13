import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

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
    heading: {
        color: "rgba(0,0, 0, 1)",
        textDecoration: "none",
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
    
}));