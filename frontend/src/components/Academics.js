
//     return (
//         <div className={classes.root}>
//             <h1>Academics</h1>

//             {/* Form to add a new class schedule */}
//             <form className={classes.form} onSubmit=
//                 <input className={classes.input} type="text" name="schedule" placeholder="Enter class schedule" />
//                 <Button className={classes.button} variant="contained" color="primary" type="submit">
//                     Add Class Schedule
//                 </Button>
//             </form>

//             {/* Rest of your form fields */}
//         </div>
//     );
// };

// export default Academics;


import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

const Academics = () => {
    const classes = useStyles();
    const [schedule, setSchedule] = useState('');
    const [subject, setSubject] = useState('');
    const [syllabus, setSyllabus] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Schedule:', schedule);
        console.log('Subject:', subject);
        console.log('Syllabus:', syllabus);
        setMessage('Academics form submitted!');
    };

    return (
        <div>
            <h2>Academics Data Form</h2>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    className={classes.input}
                    label="Schedule"
                    variant="outlined"
                    value={schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                />
                <TextField
                    className={classes.input}
                    label="Subject"
                    variant="outlined"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <TextField
                    className={classes.input}
                    label="Syllabus"
                    variant="outlined"
                    value={syllabus}
                    onChange={(e) => setSyllabus(e.target.value)}
                />
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Academics;