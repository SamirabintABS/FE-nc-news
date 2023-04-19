import { Link } from 'react-router-dom';
import ncLogo from '../../images/Nc (2)-PhotoRoom.png'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const Navigation = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="navbar">
                <Link to="/">
                    <img className='nc-logo' src={ncLogo} alt="nc news logo" />
                </Link>
                <button onClick={handleShow} className='profile-btn'> <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" /></svg></button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>You are logged in as jessjelly!</Modal.Body>
                <Modal.Footer>
                    <button className='standard-btn' onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Navigation;