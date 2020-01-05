import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const MovieModal = props => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        maxWidth={'lg'}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent>
          {props.children}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MovieModal;