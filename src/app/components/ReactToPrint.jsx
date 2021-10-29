import React ,{useRef} from "react";
import ReactToPrint from "react-to-print";
import App from './../App'

const ReactToPrin = () =>{ 
    let componentRef = useRef(null)


  
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef}
        />
        <div ref={(el) => {componentRef = el}}>
        <App  />
        </div>
      </div>
    );
}

export default ReactToPrin ;
