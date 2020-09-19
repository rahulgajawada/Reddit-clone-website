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
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [phone, setPhone] = useState("");
    const [equipment, setEquipment] = useState("");
    const [shifts, setShifts] = useState("");
    //sets styling
    const classes = useStyles();

    //checks if they put in an email and password
    function validateForm() {
        return email.length > 0 && name.length > 0 && latitude.length > 0 && longitude.length > 0 && phone.length && equipment.length && shifts.length;
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
                        id="name"
                        label="Name"
                        name="name"
                        autoFocus
                        form className={classes.form}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="Email"
                        type="email"
                        id="email"
                        form className={classes.form}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="phone"
                        label="Phone"
                        id="phone"
                        form className={classes.form}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="equipment"
                        label="Equipment"
                        id="equipment"
                        form className={classes.form}
                        onChange={e => setEquipment(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="shifts"
                        label="Shifts"
                        id="shifts"
                        form className={classes.form}
                        onChange={e => setShifts(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="latitude"
                        label="Latitude"
                        id="latitude"
                        form className={classes.form}
                        onChange={e => setLatitude(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="longitude"
                        label="Longitude"
                        id="longitude"
                        form className={classes.form}
                        onChange={e => setLongitude(e.target.value)}
                    />
                    <Button
                        margin="normal"
                        fullWidth
                        form className={classes.form}
                        variant="contained"
                        color="primary"
                        disabled={!validateForm()}
                    >
                        Register
          </Button>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}