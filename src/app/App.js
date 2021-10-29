import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'
import React , {useRef} from 'react'
import Header from './components/Header'
import StdData from './components/StdData'
import { useReactToPrint } from 'react-to-print';

function App(porps) {
  let refCompo = useRef()

  const handlePrint = useReactToPrint({
    content: () => refCompo.current,
  })

  return (
    <>
      <button onClick={handlePrint}>Print this out!</button>
      <div ref={refCompo} className="p-2" >
        <div className="app container">
          <Header />
          <br />
          <StdData />

          <hr />
        </div>
      </div>
    </>
  );
}

export default App;
