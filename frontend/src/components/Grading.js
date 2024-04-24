import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';



const Gradebook = () => {
    const classes = useStyles();
    const [grades, setGrades] = useState([]);

    const [newGrade, setNewGrade] = useState('');

    const [studentName, setStudentName] = useState('');

    const handleAddGrade = () => {
        setGrades([...grades, { name: studentName, grade: newGrade }]);
        setNewGrade('');
        setStudentName('');
    };

    const handleDeleteGrade = (index) => {
        const updatedGrades = [...grades];
        updatedGrades.splice(index, 1);

        setGrades(updatedGrades);
    };

    return (
        <div className={classes.root}>
            <Typography variant="h4">Gradebook</Typography>
            <form className={classes.form}>
                <TextField
                    className={classes.textField}
                    label="StudentName"
                    value={studentName}

                    onChange={(e) => setStudentName(e.target.value)}
                />
                <TextField
                    className={classes.textField}
                    label="New Grade"
                    value={newGrade}
                    onChange={(e) => setNewGrade(e.target.value)}
                />
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleAddGrade}
                >
                    Add Grade
                </Button>
            </form>
            {grades.map((grade, index) => (
                <div key={index}>


                    <Typography>{grade.name}: {grade.grade}</Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDeleteGrade(
                            index)}
                    >
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    );
};



const Grading = () => {
    return (
        <div>
            <Gradebook />
         
        </div>
    );
};



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(2),
    },
    textField: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));
export default Grading;