import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Enrollment = () => {
    const classes = useStyles();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [grade, setGrade] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Enrollment form submitted!');
        console.log('First Name:', firstname);
        console.log('Last Name:', lastname);
        console.log('Grade:', grade);
        setMessage('Enrollment form submitted!');;
    };

    return (
        <div>
            <h2>School Enrollment Form</h2>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    className={classes.input}
                    label="FirstName"
                    variant="outlined"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                 <TextField
                    className={classes.input}
                    label="LastName"
                    variant="outlined"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    className={classes.input}
                    label="Grade"
                    variant="outlined"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};


const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: '0 auto',
    },
    input: {
        marginBottom: theme.spacing(2),
    },
    button: {
        alignSelf: 'center',
    },
}));

export default Enrollment;