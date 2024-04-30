import React, { useState } from 'react';
import './Paiement.css';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate

function Paiement() {
  const [formData, setFormData] = useState({
    montant_sans_frais: '',
    montant_avec_frais: '',
    frais: '',
    nom_destinataire: '',
    tel_destinataire: '',
    objet: '',
    operateur: '',
    fichier: null,
    destinataire: '', 
  });
  const navigate = useNavigate(); // Initialisation de useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMontantChange = (e) => {
    const { name, value } = e.target;
    const montantSansFrais = parseFloat(formData.montant_sans_frais);
    const montantAvecFrais = parseFloat(value);
    let frais = '';
    if (!isNaN(montantAvecFrais) && !isNaN(montantSansFrais)) {
      frais = (montantAvecFrais - montantSansFrais).toFixed(2);
    }
    setFormData({ ...formData, [name]: value, frais: frais });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, fichier: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('montant_sans_frais', formData.montant_sans_frais);
      formDataToSend.append('montant_avec_frais', formData.montant_avec_frais);
      formDataToSend.append('frais', formData.frais);
      formDataToSend.append('nom_destinataire', formData.nom_destinataire);
      formDataToSend.append('tel_destinataire', formData.tel_destinataire);
      formDataToSend.append('objet', formData.objet);
      formDataToSend.append('operateur', formData.operateur);
      formDataToSend.append('fichier', formData.fichier);

      const response = await fetch('http://localhost:3003/api/paiement', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      navigate('/suivi', { state: formData }); // Redirection vers la page de suivi avec les données du formulaire
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="paiement-container">
      <h1>Paiement </h1>
      <div className="form-group">
        <label htmlFor="destinataire"> Informations destinataires</label>
        <select id="destinataire" name="destinataire" value={formData.destinataire} onChange={handleChange}>
          <option value="">Percepteur/trice</option>
          <option value="Blandine Muya">Blandine Muya (Europ)</option>
          <option value="Julie Kabukanyi">Julie Kabukanyi (US - Canada)</option>
          <option value="David Mayeleb ">David Mayeleb (RD Congo ) </option>
          <option value="Jerry Ebonzo "> Jerry Ebonzo (RD Congo) </option>


        </select>
        <label htmlFor="objet">Objet:</label>
        <input
          type="text"
          id="objet"
          name="objet"
          value={formData.objet}
          onChange={handleChange}
          required
        />
      </div>
      <form onSubmit={handleSubmit} className="paiement-form">
        <div className="form-group">
          <label htmlFor="montant_sans_frais">Montant sans frais:</label>
          <input
            type="number"
            id="montant_sans_frais"
            name="montant_sans_frais"
            value={formData.montant_sans_frais}
            onChange={handleChange}
            required
          />
          <label htmlFor="montant_avec_frais">Montant avec frais:</label>
          <input
            type="number"
            id="montant_avec_frais"
            name="montant_avec_frais"
            value={formData.montant_avec_frais}
            onChange={handleMontantChange}
            required
          />
          <label htmlFor="frais"> Frais:</label>
          <input
            type="number"
            id="frais"
            name="frais"
            value={formData.frais}
            onChange={handleChange}
            required
            readOnly // Le champ "frais" est calculé automatiquement
          />
          <label htmlFor="opérateur"> Opérateur </label>
        <select id="opérateur" name="opérateur" value={formData.opérateur} onChange={handleChange}>
          <option value="">Opérateur</option>
          <option value="Western Union">Western Union </option>
          <option value="Ria">Ria </option>
          <option value="Mpesa">Mpesa</option>
          <option value="Orange Money">Orange Money</option>


        </select>
          <label htmlFor="nom_destinataire">Nom du destinataire:</label>
          <input
            type="text"
            id="nom_destinataire"
            name="nom_destinataire"
            value={formData.nom_destinataire}
            onChange={handleChange}
            required
          />
          <label htmlFor="fichier">Télécharger Recu </label>
          <input
            type="file"
            id="fichier"
            name="fichier"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default Paiement;
