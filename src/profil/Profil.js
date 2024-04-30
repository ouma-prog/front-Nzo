
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Profil() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        if (state && state.email) {
            fetchUserData(state.email);
        }
    }, [state]);

    const fetchUserData = async (email) => {
        try {
            const response = await axios.get(`http://localhost:3003/api/profil?email=${email}`);
            setUser(response.data);
            setError('');
        } catch (error) {
            setError('Erreur lors de la récupération des données de l\'utilisateur.');
            console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
        }
    };

    return (
        <div>
            <h1>Mon Compte </h1>

            {error && <p>{error}</p>}

            {user && (
                <div>
                    
                    <p>Nom: {user.nom}</p>
                    <p>Prénom: {user.prenom}</p>
                    <p>Postnom: {user.postnom}</p>
                    <p>email :{user.email}</p>
                </div>
            )}
        </div>
    );
}

export default Profil;
