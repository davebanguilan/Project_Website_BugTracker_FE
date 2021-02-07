import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: "30%",
        backgroundColor: "rgba(153, 153, 153, 0.5)",
        backgroundBlendMode: "darken",
    },
    border: {
        border: "solid",
    },
    fullHeightCard: {
        height: "100%",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
    },
    overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "black",
    },
    overlay2: {
        position: "absolute",
        top: "25px",
        right: "15px",
        color: "white",
    },
}));