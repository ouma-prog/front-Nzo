import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaiementContent = ({ handleFormData }) => {
    const [formData, setFormData] = useState({
        montantTotalAvecFrais: '',
        montantTotalSansFrais: '',
        totalDesFrais: '',
        operateur: '',
        referenceDuTransfert: '',
        nom_destinataire: '',
        destinataire: '',
        objetDuPaiement: '',
        nomCompletDeLEnvoyeur: '',
        fichier: null,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newFormData = { ...formData, [name]: value };

        if (name === "montantTotalAvecFrais" || name === "montantTotalSansFrais") {
            const montantAvecFrais = name === "montantTotalAvecFrais" ? parseFloat(value) : parseFloat(formData.montantTotalAvecFrais);
            const montantSansFrais = name === "montantTotalSansFrais" ? parseFloat(value) : parseFloat(formData.montantTotalSansFrais);
            const frais = montantAvecFrais - montantSansFrais;
            newFormData.totalDesFrais = isNaN(frais) ? '' : frais.toFixed(2);
        }

        setFormData(newFormData);
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, fichier: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                if (key === 'fichier' && formData[key]) {
                    formDataToSend.append(key, formData[key], formData[key].name);
                } else {
                    formDataToSend.append(key, formData[key]);
                }
            });

            // Passer les données à la fonction fournie par le parent
            handleFormData(formDataToSend);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
        navigate('/suivi', { state: { ...formData, currentStep: 1 } }); // Ajouter currentStep: 1

    };

    return (
        <div className="flex flex-col items-center justify-center px-4 py-8 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Paiement</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-4xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label htmlFor="destinataire" className="block text-gray-700 text-sm font-bold mb-2">Percepteur / trice</label>
                        <select id="destinataire" name="destinataire" value={formData.destinataire} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="">Choisir</option>
                            <option value="Blandine Muya">Blandine Muya</option>
                            <option value="Julie Kabukanyi">Julie Kabukanyi</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="objetDuPaiement" className="block text-gray-700 text-sm font-bold mb-2">Objet du paiement</label>
                        <input type="text" id="objetDuPaiement" name="objetDuPaiement" value={formData.objetDuPaiement} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                    </div>
                    <div>
                        <label htmlFor="montantTotalSansFrais" className="block text-gray-700 text-sm font-bold mb-2">Montant total sans frais</label>
                        <input type="number" id="montantTotalSansFrais" name="montantTotalSansFrais" value={formData.montantTotalSansFrais} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                    </div>
                    <div>
                        <label htmlFor="montantTotalAvecFrais" className="block text-gray-700 text-sm font-bold mb-2">Montant total avec frais</label>
                        <input type="number" id="montantTotalAvecFrais" name="montantTotalAvecFrais" value={formData.montantTotalAvecFrais} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                    </div>
                    <div>
                        <label htmlFor="totalDesFrais" className="block text-gray-700 text-sm font-bold mb-2">Total des frais</label>
                        <input type="number" id="totalDesFrais" name="totalDesFrais" value={formData.totalDesFrais} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div>
                        <label htmlFor="operateur" className="block text-gray-700 text-sm font-bold mb-2">Opérateur</label>
                        <select id="operateur" name="operateur" value={formData.operateur} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="">Choisir l'opérateur</option>
                            <option value="Western Union">Western Union</option>
                            <option value="MoneyGram">MoneyGram</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="referenceDuTransfert" className="block text-gray-700 text-sm font-bold mb-2">Référence du transfert</label>
                        <input type="text" id="referenceDuTransfert" name="referenceDuTransfert" value={formData.referenceDuTransfert} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                    </div>
                    <div>
                        <label htmlFor="nomCompletDeLEnvoyeur" className="block text-gray-700 text-sm font-bold mb-2">Nom complet de l'envoyeur</label>
                        <input type="text" id="nomCompletDeLEnvoyeur" name="nomCompletDeLEnvoyeur" value={formData.nomCompletDeLEnvoyeur} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Validation</button>
                </div>
           
        
                <UploadSection onFileChange={handleFileChange} />
       
            </form>
            
        </div>
    );
};


const UploadSection = ({ onFileChange }) => {
    return (
        <div className="absolute top-80 right-10 p-4 w-56 bg-green-100 border-2 border-green-300 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
                <svg className="fill-current text-green-600 h-12 w-12 mb-3" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zM9.41 14.42L11 12.84V17h2v-4.16l1.59 1.59L16 13.01 12.01 9 8 13.01l1.41 1.41z" />
                </svg>
                <span className="text-sm text-green-800">Glissez - déposez votre justificatif de paiement</span>
                <input type="file" onChange={onFileChange} className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" aria-label="Sélectionner un fichier" />
                <button className="mt-2 bg-white border-2 border-green-500 text-green-700 font-medium py-2 px-4 rounded" aria-label="Télécharger">Upload</button>
            </div>
        </div>
    );
};

export default PaiementContent;
