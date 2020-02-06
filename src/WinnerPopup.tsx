import React from "react";
import PropTypes from 'prop-types';

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

interface OpenProps {
  open: boolean;
  setOpen: Function;
  winner: String;
}

const WinnerPopup = ({open, setOpen, winner}:OpenProps) => {

  return (
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Item to voting pool"}
        </DialogTitle>
        <DialogContent>
          The winner is {winner}.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setOpen(false)}} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}

WinnerPopup.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  winner: PropTypes.string
};

export default WinnerPopup;