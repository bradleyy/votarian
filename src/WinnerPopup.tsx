import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Candidate } from "./Candidates";

interface OpenProps {
  open: boolean;
  setOpen: Function;
  winner: Candidate;
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
          The winner is {winner.name}.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setOpen(false)}} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default WinnerPopup;