import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

const Pager = props => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const render = props.res ? 
    
    <div className="col-md-12">
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-start">
                <li className="page-item">
                    <a className="page-link" 
                        onClick={() => {props.setPage(1)}} 
                        >First</a>
                </li>
                <li className="page-item">
                    <a className="page-link" onClick={() => {
                        
                        if(props.res.prev_page_url !== null){
                            props.setPage(props.res.prev_page_url.charAt(props.res.prev_page_url.length - 1))
                        }else{
                            setOpen(true);
                            setMessage('This is the first page');
                        }
                         
                        
                        } }>Previus</a>
                </li>
                <li className="page-item">
                    <a className="page-link" onClick={() => {
                        
                        if(props.res.next_page_url !== null){
                            props.setPage(props.res.next_page_url.charAt(props.res.next_page_url.length - 1))
                        }else{
                            setOpen(true);
                            setMessage('This is the last page');
                        }
                         
                        
                        } }>Next</a>
                </li>
                
                <li className="page-item">
                    <a className="page-link"  
                    onClick={() => {props.setPage(props.res.last_page)}}>Last</a>
                </li>
            </ul>
            </nav>
            <Dialog
            open={open}
            onClose={()=>{setOpen(false)}}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{message}</DialogTitle>
                
                <DialogActions>
                <Button onClick={()=>{setOpen(false)}} color="primary">
                    Ok
                </Button>
                
                </DialogActions>
            </Dialog>
        
    </div> : null ;
    return( 
    <div className="row">
        {render}
    </div>
    );

}

export default Pager;