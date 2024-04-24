
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StaffDirectory = () => {
  const classes = useStyles();
  const [staffList, setStaffList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState({});
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  // Fetch staff details from API or database
  useEffect(() => {
    // Replace this with your actual data fetching logic
    setStaffList([
      { id: 1, name: 'John Doe', position: 'Manager' },
      { id: 2, name: 'Jane Doe', position: 'Assistant' },
    ]);
  }, []);

  const handleAddStaff = () => {
    console.log('Add Staff:', name, position);
    const newStaff = { id: Date.now(), name, position };
    setStaffList([...staffList, newStaff]);
    setOpenDialog(false);
    setName('');
    setPosition('');
  };

  const handleEditStaff = () => {
    // Replace this with your actual edit staff logic
    const updatedList = staffList.map((staff) =>
      staff.id === selectedStaff.id ? { ...staff, name, position } : staff
    );
    setStaffList(updatedList);
    setOpenDialog(false);
  };

  const handleDeleteStaff = (staffId) => {
    // Replace this with your actual delete staff logic
    const updatedList = staffList.filter((staff) => staff.id !== staffId);
    setStaffList(updatedList);
  };

  const handleOpenDialog = (staff) => {
    setSelectedStaff(staff);
    setName(staff.name);
    setPosition(staff.position);
    setOpenDialog(true);
  };

  const handleOpenAddDialog = () => {
    setSelectedStaff({});
    setName('');
    setPosition('');
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };





  return (
    <div>

      <h1>Staff Management Details</h1>



        <Button
                onClick={handleOpenAddDialog}
                color="primary"
              >
                Add
              </Button>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="staff table">
          <TableHead>
            <TableRow>
              
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staffList.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell>{staff.name}</TableCell>
                <TableCell>{staff.position}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpenDialog(staff)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteStaff(staff.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedStaff.id ? 'Edit Staff' : 'Add Staff'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Position"
            type="text"
            fullWidth
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </DialogContent>
        <DialogActions>


          
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button

            onClick={selectedStaff.id ? handleEditStaff : handleAddStaff}
            color="primary"
          >
            {selectedStaff.id ? 'Save' : 'Add'}
          </Button>
        </DialogActions>


      </Dialog>
    </div>
  );
};

export default StaffDirectory;