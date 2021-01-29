import React, { useState } from 'react'
import QRCode from 'qrcode.react';
import Alert from './Alert';
import emailjs from 'emailjs-com';
import {formatDate} from '../helps/formatDate'

function QRView({dataForm,datereturn}) {
    const [error,setError] = useState(false);
    const [sended,setSended] = useState(false);

    const {name,surname,code,email,codebook} = dataForm;

    const stringQR = `Código: ${code} \nNombre: ${name} \nApellido: ${surname} \nEmail: ${email} \nCodigo de Libro: ${codebook} \nFecha de Salida: ${formatDate(new Date())} \nFecha de Retorno: ${formatDate(datereturn)}`;

    const sendToEmail = () => {
        if(email.trim() === '' && name.trim() === '') return;
        var templateParams = {
            to_name: name.toUpperCase(),
            to_email: email,
            message: stringQR,
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
            <QRCode
                value={stringQR}
                className="qrcode"
            />
            <br></br>
            <button onClick={sendToEmail} className="btn btn-success mt-4 mb-4"><i className="fas fa-envelope"></i> Enviar por Email?</button>
            <a href="/" style={{display:"block"}}>← Regresar</a>
        </div>
    )
}

export default QRView
