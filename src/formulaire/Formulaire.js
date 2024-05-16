import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import InputField from '../Composants/inputFiled';
import InputSelect from '../Composants/inputSelect';
import backgroundImage from '../images/fondinscrit.png';


const Formulaire = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        civilite: '',
        prenom: '',
        postnom: '',
        nom: '',
        paysDeResidence: '',
        telephonePortable: '',
        adressePostale: '',
        codePostale: '',
        complementAdresse: '',
        ville: '',
        quartier: '',
        concession: '',
        parcelles: '',
        autresConcessions: '',
        nomConcession: '',
        nb_total_concession: '',
    });
    useEffect(() => {
        if (location.state) {
            setFormData(prevFormData => ({
                ...prevFormData,
                civilite: location.state.civilite || prevFormData.civilite,
                prenom: location.state.prenom || prevFormData.prenom,
                postnom: location.state.postnom || prevFormData.postnom,
                nom: location.state.nom || prevFormData.nom,
                paysDeResidence: location.state.paysDeResidence || prevFormData.paysDeResidence,
            }));
        }
    }, [location.state]);
    console.log(location.state)
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3003/api/formulaire', formData);
            console.log(response.data);
            // Traitez la réponse si nécessaire
        } catch (error) {
            console.error('Il y a eu un problème avec l\'opération de fetch :', error);
            // Affichez un message d'erreur à l'utilisateur si nécessaire
        }
    };


    return (
        <div className="flex justify-center items-center p-4 min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden p-6 space-y-4 w-full max-w-4xl">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <InputSelect
                            name="civilite"
                            value={formData.civilite}
                            onChange={handleChange}
                            options={[

                                { value: '', label: 'Civilité' },
                                { value: 'M.', label: 'M.' },
                                { value: 'Mme', label: 'Mme' },
                                { value: 'Mlle', label: 'Mlle' },
                            ]}
                            required
                        />
                        <InputField
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            placeholder="Prénom"
                            required
                        />
                        <InputField
                            type="text"
                            name="postnom"
                            value={formData.postnom}
                            onChange={handleChange}
                            placeholder="Postnom"
                            required
                        />
                        <InputField
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            placeholder="Nom"
                            required
                        />
                        <InputField
                            type="text"
                            name="paysDeResidence"
                            value={formData.paysDeResidence}
                            onChange={handleChange}
                            placeholder="Pays de résidence"
                            required
                        />
                        <InputField
    type="number" 
    name="telephonePortable" 
    value={formData.telephonePortable} 
    onChange={handleChange} 
    placeholder="Téléphone Portable" 
    required
/>
                        <InputField
  type="text"
  name="adressePostale"
  value={formData.adressePostale}
  onChange={handleChange}
  placeholder="Adresse postale"
/>
                        <InputField
                            type="text"
                            name="complementAdresse"
                            value={formData.complementAdresse}
                            onChange={handleChange}
                            placeholder="Complément d'adresse"
                            required
                        />
                          <InputField
    type="number" 
    name="codePostal" 
    value={formData.codePostal} 
    onChange={handleChange} 
    placeholder="Code postal" 
    required
/>
                        <InputField
                            type="text"
                            name="ville"
                            value={formData.ville}
                            onChange={handleChange}
                            placeholder="Ville"
                            required
                        />
                    </div>

                    <div className="space-y-4">
                    <InputSelect
                            name="quartier"
                            value={formData.quartier}
                            onChange={handleChange}
                            options={[
                                { value: '', label: 'Quartier' }, 
                                { value: 'Q1', label: 'Quartier 1' },
                                { value: 'Q2', label: 'Quartier 2' },
                                { value: 'Q3', label: 'Quartier 3' },
                            ]}
                            required
                        />
                        
                        <InputSelect
                            name="concession"
                            value={formData.concession}
                            onChange={handleChange}
                            options={[
                                { value: '', label: 'Concession' }, 
                                { value: 'C1', label: 'Concession 1' },
                                { value: 'C2', label: 'Concession 2' },
                                { value: 'C3', label: 'Concession 3' },
                            ]}
                            required
                        />
                        <InputSelect
  name="parcelles"
  value={formData.parcelles}
  onChange={handleChange}
  options={[
    { value: '', label: 'Nombre de parcelles' }, 
    { value: 'P1', label: 'Parcelle 1' },
    { value: 'P2', label: 'Parcelle 2' },
    { value: 'P3', label: 'Parcelle 3' },
  ]}
  required
/>
                       
  <InputSelect
    name="autresConcessions"
    value={formData.autresConcessions}
    onChange={handleChange}
    options={[
        { value: '', label: 'Sélectionnez' },
        { value: 'oui', label: 'Oui' },
        { value: 'non', label: 'Non' },
    ]}
    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    required
/>
{formData.autresConcessions === 'oui' &&
    <InputField
        type="text"
        name="nomConcession"
        value={formData.nomConcession}
        onChange={handleChange}
        placeholder="Nom Concession"
        required
    />
}


                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Valider les informations
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Formulaire;
