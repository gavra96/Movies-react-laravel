import React from 'react';
import { Modal, Button} from 'react-bootstrap'

const Modalui = props => {
    

    return (
        <>
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.body}
            </Modal.Body>
            <Modal.Footer>
                {props.footer}
                <Button variant="primary" onClick={props.handleClose}>
                Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
    }

export default Modalui;