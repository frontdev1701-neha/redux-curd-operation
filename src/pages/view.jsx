import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function View() {
  return (
    <>
     <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Body>
           <p>username: xyz</p>  
          <p>email:xyz@gmail.com</p>
          <p>Age: 21</p>
          <p>Gender:female</p>
        </Modal.Body>
      </Modal.Dialog>
    </div>
    </>
  )
}

export default View