import React, {useState} from 'react';

function Create(props) {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const [data, setData] = useState([])

    function handleChange(event) {
        const {name, value} = event.target;
        setCredentials({ ...credentials, [name] : value });
    }

    function submitCredentials(event) {
        event.preventDefault();
        props.onAdd(credentials);

        const uniqueId = Date.now() + '-' + Math.floor(Math.random() * 1000000);
        setData([
            ...data, {
                ...credentials,
                _id: uniqueId
            }
        ])

        setCredentials({email: "", password: ""});
    }


    const hadnleDelete = (id) => {
      setData(data.filter((e) => e._id != id))
    } 

    console.log(data)

    return (
        <div>
            <h1>Create Credential</h1>
            <form>
                <label>Email:</label>
                <input type="email" name="email"
                    value={
                        credentials.email
                    }
                    onChange={handleChange}/>
                <br/>
                <label>Password:</label>
                <input type="password" name="password"
                    value={
                        credentials.password
                    }
                    onChange={handleChange}/>
                <br/>
                <button onClick={submitCredentials}>Submit</button>
            </form>


            <div style={
                {
                    marginTop: "50px",
                    display: "flex",
                    gap: "2rem",
                    flexWrap: "wrap"
                }
            }>
                {
                data?.map((e, i) => (
                    <div className="container" key={i} >
                        <h1>{
                            e?.email
                        }</h1>
                        <p>{
                          e?.password
                        }</p>
                        <button onClick={() => hadnleDelete(e?._id)} >DELETE</button>
                    </div>
                ))
            } </div>
        </div>
    );
}

export default Create;
