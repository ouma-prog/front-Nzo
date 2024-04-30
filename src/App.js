import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login'; 
import Register from './register/Register'; 
import Forgotpassword from './forgotpassword/Forgotpassword';
import Formulaire from './formulaire/Formulaire';
import NewPassword from './newpassword/Newpassword';
import Paiement from './paiement/Paiment';
import WelcomePage from './welcomePage/WelcomePage';
import Gestion from './Dashbord/Gestion';
import Profil from './profil/Profil';
import Form from './form-inscrip/Form';
import Suivi from './suivipaiement/Suivi';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/newpassword/resetToken" element={<NewPassword/>} />
          <Route path="/paiement" element={<Paiement />} />
          <Route path="/welcomePage" element={<WelcomePage />} />
          <Route path="/gestion" element={<Gestion />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/form" element={<Form />} />
          <Route path="/suivi" element={<Suivi />} />







        </Routes>
      </div>
    </Router>
  );
}

export default App;
