import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import {CandidatesProps} from './SortableComponent';
import { observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -70,
    //left: 0,
    right: 20
    //margin: '0 auto',
  }
}));


const AddItem = observer(({candidates}:CandidatesProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [itemText, setItemText] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  }    

  const handleClose = () => {
    setOpen(false);
    candidates.addCandidate(itemText);
    setItemText("");
  };

  return (
    <div>
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fabButton}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      {open ?
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Item to voting pool"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="outlined-basic"
            label="New Item"
            variant="outlined"
            value={itemText}
            onChange={e => {
              setItemText(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setOpen(false)}} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      : "" }
    </div>
  );
});

export default AddItem;