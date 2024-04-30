import React, { useState } from 'react';
//import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        quartier: '',
        concession: '',
        parcelles: '',
        autresConcessions: 'non',
        nomConcession: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Vous pouvez envoyer les données à votre serveur ici
    };

    return (
        <div>
            <h2>Formulaire d'inscription </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <select id="quartier" name="quartier" value={formData.quartier} onChange={handleChange}>
                        <option value="">Quartier</option>
                        <option value="Option1">Kindobo</option>
                        
                    </select>
                </div>
                <div className="form-group">
                    <select id="concession" name="concession" value={formData.concession} onChange={handleChange}>
                        <option value="">Concession</option>
                        <option value="Option1">Anatole</option>
                        <option value="Option2">Caroline</option>
                        <option value="Option3">Isarel</option>
                        <option value="Option3">Kajeje 1</option>
                        <option value="Option3">Kajeje 2</option>
                        <option value="Option3"> Moliére </option>
                        <option value="Option3"> Nkulu 1</option>
                        <option value="Option3">Nkulu 2 </option>
                        <option value="Option3">Ntungila </option>
                        <option value="Option3">Radjabu</option>


                    </select>
                </div>
                <div className="form-group">
                    <select id="parcelles" name="parcelles" value={formData.parcelles} onChange={handleChange}>
                        <option value="">Nombre de parcelles</option>
                        <option value="Option1">Option 1</option>
                        <option value="Option2">Option 2</option>
                        <option value="Option3">Option 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <select id="autresConcessions" name="autresConcessions" value={formData.autresConcessions} onChange={handleChange}>
                    <option value="">Autres concessions</option>
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                    </select>
                    {formData.autresConcessions === "oui" && (
    <div>
        <select id="parcelles" name="parcelles" value={formData.parcelles} onChange={handleChange}>
            <option value="">Nombre de parcelles</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
            <option value="Option3">Option 3</option>
        </select>
        <select id="concession" name="concession" value={formData.concession} onChange={handleChange}>
            <option value="">Concession</option>
            <option value="Anatole">Anatole</option>
            <option value="Caroline">Caroline</option>
            <option value="Isarel">Isarel</option>
            <option value="Kajeje 1">Kajeje 1</option>
            <option value="Kajeje 2">Kajeje 2</option>
            <option value="Moliére">Moliére</option>
            <option value="Nkulu 1">Nkulu 1</option>
            <option value="Nkulu 2">Nkulu 2</option>
            <option value="Ntungila">Ntungila</option>
            <option value="Radjabu">Radjabu</option>
        </select>
    </div>
)}
                </div>
                <button type="submit">Confirmer</button>
            </form>
        </div>
    );
};

export default Form;
