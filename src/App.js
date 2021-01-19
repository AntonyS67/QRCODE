import { useState } from 'react';
import Form from './components/Form';
import Progress from './components/Progress';
import QR from './components/QR';
import './App.css';


function App() {
  const [dataForm,setDataForm] = useState({
    code:'',
    name:'',
    surname:'',
    email:''
  });
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
            <QR
              dataForm={dataForm}
            />
          )
          :
          (
            <Form
              dataForm={dataForm}
              setDataForm={setDataForm}
              setGenerated={setGenerated}
              setLoading={setLoading}
            />
          )
      }
    </div>
  );
}

export default App;
