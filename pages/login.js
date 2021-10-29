import React, { useEffect , useState } from 'react'
import Sawo from 'sawo'

const LoginPage = () => {
    const [email , setEmail] = useState("");

    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'email',
            // Add the API key copied from 5th step
            apiKey: '56e01932-b379-4953-8c4a-80c9ad56db91',
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                setEmail(payload.identifier);
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [])

    return (
        <div style = {{overflow:"hidden"}}>
            <div style = {{textAlign:"center" , padding:"20px 0"}}>{email !== '' ? `Logged in as : ${email}` : ''}</div>
            <div style = {{height:"80vh" , display:"flex" , alignItems:"center" , justifyContent:"center"}}>
                <div id="sawo-container" style={{height:"300px", width:"400px"}}></div>
            </div>
        </div>
    )
}

export default LoginPage