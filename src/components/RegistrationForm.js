import {useState,useEffect} from 'react'

const RegistrationForm = () => 
{

    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email: "",
        password: "",
        confirmPassword : ""
    });


    const onCreateAccount = (evt)=>{

        evt.preventDefault();


        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/users`,{
            method :"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData)
        })
        .then(response=>response.json())
        .then(json=>{
    
              alert(json.message);
              setFormData({
                firstName : "",
                lastName : "",
                email: "",
                password: "",
                confirmPassword : ""
            })
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    }
      


    return (
        <section id="register-section">

        <div className= "container">
        
            <h1>Register</h1>

            <form action="" onSubmit={onCreateAccount}>

                <div className="form-control">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" value={formData.firstName}  onChange={(evt)=>{
                        setFormData({...formData, firstName : evt.target.value});
                    }} />
                </div>

                <div className="form-control">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" value={formData.lastName} onChange={(evt)=>{
                        setFormData({...formData, lastName : evt.target.value});
                    }} />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email"  value={formData.email} onChange={(evt)=>{
                        setFormData({...formData, email : evt.target.value});
                    }}/>
                </div>


                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" valeu={formData.password} onChange={(evt)=>{
                        setFormData({...formData, password : evt.target.value});
                    }}/>
                </div>

                <div className="form-control">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="text" id="password"  value={formData.confFirmPassword} onChange={(evt)=>{
                        setFormData({...formData, confirmPassword : evt.target.value});
                    }}/>
                </div>


                <div className="form-control">
                    <button className="btn" type="submit">Create Account</button>
                </div>

            </form>

        </div>

    </section>
    )
}

export default RegistrationForm
