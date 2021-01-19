import React, { useState } from 'react'

import emailjs from 'emailjs-com';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
  };
function ModalEmail({modalIsOpen,closeModal,dataForm,setIsOpen,setError,setSended}) {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    
    const handleSendToEmail = (e) => {
        e.preventDefault();
        if(email.trim() === '' && name.trim() === '') return;
        setIsOpen(false);
        var templateParams = {
          to_name: name.toUpperCase(),
          to_email: email,
          message: dataForm,
          from_name: 'Aplication QR',
        };
        emailjs.send('service_kydej4w','template_s34w40i',templateParams,'user_V4E7g6G2mmK9SpPbmD8x7')
        .then(res => {
          setSended(true);
        })
        .catch(err => {
          setError(true)
          console.log(err);
        })
    }
    
    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleName = e => {
        setName(e.target.value)
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            >
            <form className="form form-email">
                <div className="mb-3 text-left">
                <label htmlFor="name" className="form-label"><strong>Nombre:</strong></label>
                <input type="text" className="form-control" name="name" id="name" placeholder="A quien vas a enviar?" required onChange={handleName}/>
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label"><strong>Email:</strong></label>
                <input placeholder="Ingresa el correo a enviar" type="email" name="email" id="email" className="form-control" required onChange={handleEmail}/>
                </div>
            </form>
            <button onClick={handleSendToEmail} className="btn btn-success mt-4 mb-4 button-email w-100"><i className="fas fa-envelope"></i> Enviar</button>
        </Modal>
    )
}

export default ModalEmail
