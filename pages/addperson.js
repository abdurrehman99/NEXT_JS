import Layout from "./components/Layout";
import { useState } from "react";
import axios from "axios";
const addPerson = () => {
  const initialState = {};
  const [state, setState] = useState(initialState);

  var handlechange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  var callServer = () => {
    console.log(state);
    axios
      .post("http://localhost:5000/persons/add", state)
      .then(res => {
        console.log(res.data);
        setState({ });
      })
      .catch(err => {
        console.log(err);
      });
    console.log("in m clicked");
  };
  return (
    <Layout>
      <div className="row p-2">
        <div className="col-xs-12 col-sm-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Employee</h5>
              <input
                placeholder="Name"
                name="name"
                onChange={e => handlechange(e)}
                className='form-control mb-2'
              />
              <input
                placeholder="Designation"
                name="designation"
                onChange={e => handlechange(e)}
                className='form-control mb-2'
              />
              <input
                placeholder="Age"
                name="age"
                onChange={e => handlechange(e)}
                className='form-control mb-2'
              />
              <input
                placeholder="Status"
                name="status"
                onChange={e => handlechange(e)}
                className='form-control mb-2'
              />
              <button className='btn btn-success' onClick={callServer}>Add Employee</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Index.getInitialProps = async function() {
//     // const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
//     // const data = await res.json();

//     return {
//       bpi: data.bpi
//     };
//   }

export default addPerson;
