import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Formulaire() {
    const location = useLocation(); // Récupère l'état passé de la navigation
    const [formData, setFormData] = useState({
        ...location.state,
        telephone: '',
        adressePostale: '',
        codePostal: '',
        complementAdresse: '',
        ville: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3003/api/formulaire', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };


    return (
        <div className="formulaire-container">
            <form onSubmit={handleSubmit} className="formulaire-form">
                <div className="input-group">
                    <label htmlFor="civilite">Civilité</label>
                    <select
                        id="civilite"
                        name="civilite"
                        value={formData.civilite}
                        onChange={handleChange}
                        required
                    >
                        <option value=""> Civilité</option>
                        <option value="M.">M.</option>
                        <option value="Mme">Mme</option>
                        <option value="Mlle">Mlle</option>
                    </select>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        placeholder="Prénom"
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        name="postnom"
                        value={formData.postnom}
                        onChange={handleChange}
                        placeholder="Postnom"
                        required
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Nom"
                        required
                    />
                </div>

                <div className="input-group">
    <input
        type="text"
        name="paysDeResidence"
        value={formData.paysDeResidence || ''} 
        onChange={handleChange}
        placeholder="Pays de Résidence"
        required
    />
</div>

                <div className="input-group">
                    <input
                        type="tel"
                        name="telephonePortable"
                        value={formData.telephonePortable}
                        onChange={handleChange}
                        placeholder="Téléphone portable"
                        required
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        value={formData.adressePostale}
                        onChange={handleChange}
                        placeholder="Adresse postale"
                        required
                    />
                </div>
                
                <div className="input-group">
                    <input
                        type="text"
                        name="codePostal"
                        value={formData.codePostal}
                        onChange={handleChange}
                        placeholder="Code postal"
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        name="Complément d'adresse"
                        value={formData.adressePostale}
                        onChange={handleChange}
                        placeholder="Complément d'adresse"
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        name="ville"
                        value={formData.ville}
                        onChange={handleChange}
                        placeholder="Ville"
                        required
                    />
                </div>
                
                  
                <button type="submit" className="submit-button">Valider les informations</button>
            </form>
        </div>
    );
}

export default Formulaire;
