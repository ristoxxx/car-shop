import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


function AddCar(props) {
    const [car, setCar] = useState({brand: '', model: '', color: '', fuel: '', year: '', price: ''});
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.addCar(car);
        handleClose();
    };

    const inputChanget = (event) => {
        setCar({...car, [event.target.name]: event.target.value});
    };

    return(
        <div>
            <Button style={{margin: 10}}  variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle >New Car</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Brand"
            name="brand"
            value={car.brand}
            onChange={inputChanget}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Model"
            name="model"
            value={car.model}
            onChange={inputChanget}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Color"
            name="color"
            value={car.color}
            onChange={inputChanget}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Fuel"
            name="fuel"
            value={car.fuel}
            onChange={inputChanget}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Year"
            name="year"
            value={car.year}
            onChange={inputChanget}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Price"
            name="price"
            value={car.price}
            onChange={inputChanget}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

        </div>
        )
}

export default AddCar;