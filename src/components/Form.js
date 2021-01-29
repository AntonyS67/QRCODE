import React from 'react'
import DatePicker from 'react-datepicker'
import {registerLocale,setDefaultLocale } from 'react-datepicker'
import es from 'date-fns/locale/es';

import "react-datepicker/dist/react-datepicker.css";

registerLocale('es',es);
setDefaultLocale('es')
function Form({dataForm,datereturn,setDataForm,setGenerated,setLoading,setDateReturn}) {
    const {code,name,surname,email,codebook} = dataForm;

    const handleChange = e => {
        setDataForm({
          ...dataForm,
          [e.target.name]:e.target.value
        })
        setGenerated(false);
    }
    const handleClick = () => {
        if(code.trim() === '' || name.trim() === '' || surname.trim() === '' || email.trim() === ''){
          return
        }
        setLoading(true)
        move();
    }

    const handleDate = date => {
      setDateReturn(date)
      console.log(date);
    }

    const move = () => {
        let i=1;
        let width = 1;
        let id= setInterval(frame,10)
        function frame() {
          if(width >= 100){
            setGenerated(true);
            setLoading(false)
            clearInterval(id);
            i=0
          }else{
            let progressBar = document.getElementById('progressbar');
            width++;
            progressBar.style.width = width+"%";
            progressBar.innerHTML = width+"%";
          }
        }
    }

    return (
        <form className="form">
            <div className="mb-3 ">
                <label htmlFor="code" className="form-label ">Código de Estudiante</label>
                <input type="text" className="form-control" id="code" required name="code" value={code} onChange={handleChange} />
            </div>
            <div className="mb-3 ">
                <label htmlFor="name" className="form-label ">Nombres</label>
                <input type="text" className="form-control" id="name" required name="name" value={name} onChange={handleChange} />
            </div>
            <div className="mb-3 ">
                <label htmlFor="surname" className="form-label ">Apellidos</label>
                <input type="text" className="form-control" id="surname" required name="surname" value={surname} onChange={handleChange} />
            </div>
            <div className="mb-3 ">
                <label htmlFor="email" className="form-label ">Email</label>
                <input type="email" className="form-control" id="email" required name="email" value={email} onChange={handleChange}/>
            </div>
            <div className="mb-3 ">
                <label htmlFor="codebook" className="form-label ">Código de Libro</label>
                <input type="text" className="form-control" id="codebook" required name="codebook" value={codebook} onChange={handleChange} />
            </div>
            <div className="mb-3 ">
                <label htmlFor="datereturn" className="form-label ">Fecha de Retorno</label>
                <DatePicker
                    selected={datereturn}
                    value={datereturn}
                    onChange={date => handleDate(date)}
                    showTimeSelect
                    dateFormat="dd 'de' MMMM 'de' yyyy 'a las' h:mm:aa"
                    className="form-control"
                    locale="es"
                    withPortal
                    minDate = {new Date()}
                    timeIntervals={15}
                    name="datereturn"
                />
            </div>
            <button onClick={handleClick} className="btn">Create Code</button>
        </form>
    )
}

export default Form
