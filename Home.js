import React, { useState } from "react";
import { Button, TextField, Box, Container, FormControl, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from 'react-router-dom';

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


export default function Home() {
    //sets styling
    const classes = useStyles();

    //Notably here the button is disabled if the form isn't validated
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <img src="chevron.jpg"></img>
                <br />
                
                <Button
                    href="/register"
                    margin="normal"
                    fullWidth
                    form className={classes.form}
                    variant="contained"
                    color="primary"
                > 
                        Worker Registeration
                    
                </Button>
                <Button
                    href="/workorder"
                    margin="normal"
                    fullWidth
                    form className={classes.form}
                    variant="contained"
                    color="primary"
                >
                    Work Order
                </Button>

                <Button
                    href = "/statusupdate"
                    margin="normal"
                    fullWidth
                    form className={classes.form}
                    variant="contained"
                    color="primary"
                >
                    Status Update
          </Button>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}







