import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@material-ui/core';
import {  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';


const FeesManagement = () => {
    const [studentName, setStudentName] = useState('');
    const [age, setAge] = useState('');
    const [className, setClassName] = useState('');
    const [section, setSection] = useState('');
    const [feeCollection, setFeeCollection] = useState('');
    const [paymentPending, setPaymentPending] = useState('');
    const [students, setStudents] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform necessary actions with the form data
        setStudents(prevStudents => [...prevStudents, {
            studentName,
            age,
            className,
            section,
            feeCollection,
            paymentPending,
        }]);
                setStudentName('');
                setAge('');
                setClassName('');
                setSection('');
                setFeeCollection('');
                setPaymentPending('');
    };

    return (
        <div>
            <h1>Fees Management</h1>
        <Grid container justify="center">
            
            <Grid item xs={12} sm={6}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Student Name"
                            fullWidth
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            margin="normal"
                        />
                        <TextField
                            label="Age"
                            fullWidth
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            margin="normal"
                        />
                        <TextField
                            label="Class"
                            fullWidth
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                            margin="normal"
                        />
                        <TextField
                            label="Section"
                            fullWidth
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                            margin="normal"
                        />
                        <TextField
                            label="Fee Collection"
                            fullWidth
                            value={feeCollection}
                            onChange={(e) => setFeeCollection(e.target.value)}
                            margin="normal"
                        />
                        <TextField
                            label="Payment Pending"
                            fullWidth
                            value={paymentPending}
                            onChange={(e) => setPaymentPending(e.target.value)}
                            margin="normal"
                        />
                        
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </form>
        </Paper>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Section</TableCell>
                <TableCell>Fee Collection</TableCell>
                <TableCell>Payment Pending</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.studentName}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.className}</TableCell>
                  <TableCell>{student.section}</TableCell>
                  <TableCell>{student.feeCollection}</TableCell>
                  <TableCell>{student.paymentPending}</TableCell>
                  <TableCell>{student.financialReporting}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
    </div>
  );
};

export default FeesManagement;
//                 </Paper>
//             </Grid>
//         </Grid>
//     );
// };

// export default FeesManagement;

