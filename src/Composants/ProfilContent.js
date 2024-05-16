import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { PencilIcon, TrashIcon, CameraIcon } from '@heroicons/react/24/solid'; // Assurez-vous d'utiliser les bons chemins d'importation

const ProfilContent = () => {
    const [user, setUser] = useState({
        prenom: '',
        postnom: '',
        nom: '',
        email: '',
        telephone: ''
    });
    const [profilePic, setProfilePic] = useState(null);
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
            setProfilePic(response.data.profilePic); // Assurez-vous que profilePic est la clé pour l'URL de l'image
            setError('');
        } catch (error) {
            console.error('Erreur lors de la récupération des données utilisateur :', error);
            setError('Erreur lors de la récupération des données utilisateur.');
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfilePic(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const removeProfilePic = () => {
        setProfilePic(null); // Ou définissez une image par défaut
    };

    const updateUserData = async () => {
        try {
            await axios.put('http://localhost:3003/api/NvProfil', user);
            console.log('Données utilisateur mises à jour avec succès');
        } catch (error) {
            console.error('Erreur lors de la mise à jour des données utilisateur :', error);
        }
    };

    return (
        <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto my-10 flex items-center">
            <div className="flex-1">
                <h1 className="text-xl font-semibold">Mon compte</h1>
                <div>
                    <label className="cursor-pointer inline-block bg-gray-200 p-2 rounded-full hover:bg-gray-300 mr-2">
                        <CameraIcon className="h-6 w-6 text-gray-600"/>
                        <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                    </label>
                    <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full" onClick={removeProfilePic}>
                        <TrashIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>
            <div className="flex-1">
                {profilePic && <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full" />}
            </div>
            <div className="w-full mt-5">
                <div>
                    <span className="text-gray-600 capitalize" style={{ color: '#030303', fontSize: '16px', fontFamily: 'Roboto', lineHeight: '21px' }}>Prénom</span>
                    <input
                        type="text"
                        name="prenom"
                        value={user.prenom}
                        onChange={(e) => setUser({...user, prenom: e.target.value})}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <PencilIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                </div>
                <div>
                    <span className="text-gray-600 capitalize" style={{ color: '#030303', fontSize: '16px', fontFamily: 'Roboto', lineHeight: '21px' }}>Postnom</span>
                    <input
                        type="text"
                        name="postnom"
                        value={user.postnom}
                        onChange={(e) => setUser({...user, postnom: e.target.value})}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <PencilIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                </div>
                <div>
                    <span className="text-gray-600 capitalize" style={{ color: '#030303', fontSize: '16px', fontFamily: 'Roboto', lineHeight: '21px' }}>Nom</span>
                    <input
                        type="text"
                        name="nom"
                        value={user.nom}
                        onChange={(e) => setUser({...user, nom: e.target.value})}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <PencilIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                </div>
                <div>
                    <span className="text-gray-600 capitalize" style={{ color: '#030303', fontSize: '16px', fontFamily: 'Roboto', lineHeight: '21px' }}>Email</span>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <PencilIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={updateUserData} style={{ cursor: 'pointer', top: '823px', left: '803px', width: '155px', height: '50px', padding: '0px 8px', border: '0', boxSizing: 'border-box', borderRadius: '100px', backgroundColor: '#a8be90', color: '#000000', fontSize: '14px', fontFamily: 'Red Hat Display', fontWeight: 500, lineHeight: '18px', outline: 'none' }}>
                        Mettre à jour
                    </button>
                </div>
                <div>
                    <span className="text-gray-600" style={{ color: '#424242', fontSize: '12px', fontFamily: 'Roboto', lineHeight: '16px' }}>Supprimer la photo</span>
                </div>
            </div>
        </div>
    );
};

export default ProfilContent;