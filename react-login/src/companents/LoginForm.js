import React, { useState } from "react";


function LoginForm ( { Login, error } ) {

    const [details, setDetails] = useState( {isim: "", eposta: "", şifre: "" } );

    const submitHandler = e => {
        e.preventDefault();

        Login(details);

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Giriş</h2>
                { (error != "") ? ( <div className="error"> {error} </div>) : "" }

                <div className="form-group">
                    <label htmlFor="name">İsim:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, isim: e.target.value})} value={details.isim}  />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, eposta: e.target.value})} value={details.eposta}  />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Şifre:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, şifre: e.target.value})} value={details.şifre}  />
                </div>

                <input type="submit" value="Gönder" />

            </div>

        </form>
        

    )
    
}


export default LoginForm;



