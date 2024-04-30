import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Text from '../Composants/Text';
import InputField from '../Composants/InputEmail';
import Inputpassword from '../Composants/inputpassword';
import loginFond from "../images/fondlogin.png";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3003/api/login', {
                email,
                password,
            });
            console.log(response.data);
            // Si la connexion est réussie, naviguez vers le profil de l'utilisateur.
            navigate('/profil', { state: { email: response.data.email } });
        } catch (error) {
            // Gérer les erreurs ici, par exemple en affichant un message à l'utilisateur
            console.error(error.response ? error.response.data : error.message);
        }
    };

    const handleForgotPassword = () => {
        navigate('/forgotpassword'); // Navigue vers la page de réinitialisation du mot de passe
    };

    const handleRegister = () => {
        navigate('/register'); // Navigue vers la page d'inscription
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen"
             style={{ backgroundImage: `url(${loginFond})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full max-w-md px-8 py-10 bg-white bg-opacity-90 rounded shadow-md">
                <Text text="LA GESTION IMMOBILIÈRE FACILE" />
                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                    <InputField
                        type="email"
                        placeholder="Identifiant ou Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Inputpassword
                        placeholder="Mot de passe*"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="text-sm text-green-600 hover:underline cursor-pointer text-right"
                         onClick={handleForgotPassword}>
                        Mot de passe oublié
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition duration-300"
                    >
                        Se connecter
                    </button>
                    <div className="text-sm text-green-600 hover:underline cursor-pointer text-center"
                         onClick={handleRegister}>
                        S'inscrire maintenant
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
