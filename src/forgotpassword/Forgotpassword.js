import React, { useState } from 'react';
import axios from 'axios';
import './Forgotpassword.css';
import { Link } from 'react-router-dom'; // Import Link component for routing

function Forgotpassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update the endpoint as per your API route for password reset
            const response = await axios.post('http://localhost:3003/api/forgotpassword', { email });
            // Redirect to login or show success message
            console.log(response.data);
        } catch (error) {
            // Handle error
            console.error('Error sending password reset email:', error);
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Réinitialisation du mot de passe</h2>
            <p>Veuillez fournir l'adresse e-mail associée à votre compte afin que nous puissions vous envoyer un lien pour réinitialiser votre mot de passe.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label> {/* Add label for email */}
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email"
                    required 
                />
                <button type="submit">Continuer</button>
            </form>
            <Link to="/login" className="back-to-login">Revenir à la page de connexion</Link> {/* Add link to login page */}
        </div>
    );
}

export default Forgotpassword;
