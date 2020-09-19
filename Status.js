import React, { useState } from "react";
import { Button, TextField, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(2),
        align: "center"
    },
    rad: {

    },
}));


export default function App() {
    // State variable for every field
    const [workerID, setID] = useState("");

    //sets styling
    const classes = useStyles();

    //checks if they put in an email and password
    function validateForm() {
        return workerID.length > 0;
    }


    //Notably here the button is disabled if the form isn't validated
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <img src="chevron.jpg"></img>
                <br />
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="workerID"
                        label="Worker ID"
                        name="workerID"
                        autoFocus
                        form className={classes.form}
                        onChange={e => setID(e.target.value)}
                    />
                    <Button
                        margin="normal"
                        fullWidth
                        form className={classes.form}
                        variant="contained"
                        color="primary"
                        disabled={!validateForm()}
                    >
                        Send
          </Button>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}