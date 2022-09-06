import React, { useState} from 'react';
import LoginForm from './companents/LoginForm';
import img1 from './image/logo-yatay.png';



function App() {
const adminUser = {
eposta: "admin@kolaysoft.com",
şifre: "kolaysoft123"
}

const [user, setUser] = useState( {isim: "", eposta: ""});
const [error, setError] = useState("");

const Login = details => {
console.log(details);

 
if (details.eposta == adminUser.eposta && details.şifre == adminUser.şifre) {
console.log("Giriş Yapıldı!"); 
setUser({
  isim: details.isim,
  eposta: details.eposta
});

} else {
  console.log("Bilgiler Eşleşmiyor!");
  setError ("Bilgiler Eşleşmiyor!")
}
}

const Logout = () => {
  setUser( {isim: "", eposta: ""});
}

  return (
    <div className="App">
      {(user.eposta != "") ? (
        <div className='welcome'>
         <h2>Hoş Geldiniz, <span> {user.isim} </span> </h2>         
         <button onClick={Logout}> Çıkış Yap </button> 
        </div>


      ) : ( 
        <LoginForm Login={Login} error={error} /> 
      )}



<div className='logo'>
<img src={img1}/>
</div>



    </div>


  );




}

export default App;
