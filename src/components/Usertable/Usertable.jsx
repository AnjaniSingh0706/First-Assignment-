import './Usertable.css';
import react,{useState,useEffect} from 'react';
import axios from 'axios';
function Usertable(){
    const [users,setUsers] =useState([]);
    const [loading,setLoading] =useState(true);
//api call for fetching users from axios api        
    const fetchData= async()=>{
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
            setLoading(false);
        }catch(error){
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }
    const handleShowData = () => {
        fetchData();
    }

    const handleClearData = () => {
        setUsers([]);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    if(loading){
        return <p>Loading data...</p>;
    }
    return (
        <div>
        <h1>User Data</h1>
        <div className="button-container">
                <button className="button button-fetch" onClick={handleShowData}>Show Data</button>
                <button className="button button-clear" onClick={handleClearData}>Clear Data</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    )
}
export default Usertable;