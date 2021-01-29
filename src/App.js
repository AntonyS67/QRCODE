import { useState } from 'react';
import Form from './components/Form';
import Progress from './components/Progress';
import './App.css';
import QRView from './components/QR';


function App() {
  const [dataForm,setDataForm] = useState({
    code:'',
    name:'',
    surname:'',
    email:'',
    codebook:'',
  });
  const [datereturn,setDateReturn] = useState(new Date());
  const [generated,setGenerated] = useState(false);
  const [loading,setLoading] = useState(false);

  return (
    <div className="app">
      {
        loading ? (
          <Progress/>
        )
        :
          generated ?
          (
            <QRView
              dataForm={dataForm}
              datereturn={datereturn}
            />
          )
          :
          (
            <Form
              dataForm={dataForm}
              datereturn={datereturn}
              setDataForm={setDataForm}
              setGenerated={setGenerated}
              setLoading={setLoading}
              setDateReturn={setDateReturn}
            />
          )
      }
    </div>
  );
}

export default App;
