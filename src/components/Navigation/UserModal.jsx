import Modal from 'react-bootstrap/Modal';


const UserModal = ({ handleClose, showModal }) => {

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>You are logged in as jessjelly!</Modal.Body>
            <Modal.Footer>
                <button className='standard-btn' onClick={handleClose}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default UserModal;