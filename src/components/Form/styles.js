import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
    },
    paper: {
      padding: theme.spacing(2),
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      borderRadius: '20px',
    },
    form: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    buttonSubmit: {
      marginBottom: 10,
    },
    formControl: {
      margin: theme.spacing(1),
    },
  }));