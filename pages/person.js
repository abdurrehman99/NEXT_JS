import Layout from "./components/Layout";
import axios from 'axios';

const person = (props) => {
  
  const deleteP = (id)=>{
    console.log(id);
    axios.delete('http://localhost:5000/persons/'+id)
      .then( res=> console.log(res.data))
      .catch( err=> console.log(err));
  }
  return (
    <Layout>
      <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
        { props.persons.map( (p,index)=>{
            return (
                <tr key={index}>
                        <td>{index+1}</td>
                        <td>{p.name}</td>
                        <td>{p.designation}</td>
                        <td>{p.status}</td>
                        <td><button  onClick={ ()=>deleteP(p._id) } className="btn btn-danger">Delete !</button></td>
                    </tr>
                    
            )
        })}
        </tbody>
        </table>
y    </Layout>
  );
};

person.getInitialProps = async function() {
    let res = await axios.get('http://localhost:5000/persons')
    // const res = await res.json();
    // data = JSON.stringify(data)
    // data = JSON.parse(data)
        return {
            persons : res.data
        };
}

export default person;


