import React, { useState } from 'react'
import QRCode from 'qrcode.react';
import Alert from './Alert';
import emailjs from 'emailjs-com';

function QR({dataForm}) {
    const [error,setError] = useState(false);
    const [sended,setSended] = useState(false);

    const {name,email} = dataForm;

    const sendToEmail = () => {
        if(email.trim() === '' && name.trim() === '') return;
        var templateParams = {
            to_name: name.toUpperCase(),
            to_email: email,
            message: JSON.stringify(dataForm),
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

    return (
        <div className="code">
            {sended && (
                <Alert classAlert="success" message="Correo enviado correctamente"/>
            )}
            {error && (
                <Alert classAlert="danger" message="Ocurrio un error al enviar por correo electronico"/>
            )}
            <small><i className="fas fa-check-circle"></i></small>
            <h2>!Código creado¡</h2>
            <QRCode value={JSON.stringify(dataForm)} className="qrcode"/>
            <br></br>
            <button onClick={sendToEmail} className="btn btn-success mt-4 mb-4"><i className="fas fa-envelope"></i> Enviar por Email?</button>
            <a href="/" style={{display:"block"}}>← Regresar</a>
        </div>
    )
}

export default QR
