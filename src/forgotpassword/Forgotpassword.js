import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Forgotpassword() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3003/api/forgotpassword', { email });
            console.log(response.data);
            navigate('/checkemail');
        } catch (error) {
            console.error('Error sending password reset email:', error);
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/3 bg-[#d7e6c5] flex items-center justify-center p-6">
                <h1 className="text-2xl font-bold text-center">LA GESTION<br />IMMOBILIÈRE<br />FACILE</h1>
            </div>
            <div className="w-2/3 flex items-center justify-center">
                <div className="max-w-md w-full space-y-8 p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold">Réinitialisation du mot de passe</h2>
                    <p className="text-gray-600">Veuillez fournir l'adresse e-mail associée à votre compte afin que nous puissions vous envoyer un lien pour réinitialiser votre mot de passe.</p>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder="Email"
                                    required 
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <button 
                                type="submit" 
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Changer mon mot de passe
                            </button>
                        </div>
                    </form>
                    <div className="text-sm">
                        <Link to="/login" className="font-medium text-green-600 hover:text-green-500">Revenir à la page de connexion</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forgotpassword;
