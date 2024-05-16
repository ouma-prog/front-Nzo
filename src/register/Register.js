import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import InputEmail from '../Composants/InputEmail';
import InputField from '../Composants/inputFiled';
import Inputpassword from '../Composants/inputpassword';
import Button from '../Composants/Bouton';
import Text from '../Composants/Text';
import pcimg from '../images/pcimg.png';


function Register() {
    const [prenom, setPrenom] = useState('');
    const [postnom, setPostnom] = useState('');
    const [nom, setNom] = useState('');
    const [paysDeResidence, setPaysDeResidence] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            const response = await axios.post('http://localhost:3003/api/register', {
                Nom: nom, 
                Prenom: prenom,
                Email: email,
                Password: password,
                Postnom: postnom, 
                Pays_de_residence: paysDeResidence
            });
            console.log(response.data);
            navigate('/formulaire', { state: { prenom, postnom, nom, paysDeResidence, email } });

        } catch (error) {
            if (error.response && error.response.data.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage("Une erreur s'est produite lors de l'enregistrement.");
            }
            console.error('There was an error registering:', error);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center justify-center">
            <img src={pcimg} alt="PC" className="mr-8 h-auto max-h-full" />
            <form onSubmit={handleSubmit} className="w-full max-w-md px-2 py-8 bg-white bg-opacity-90 rounded shadow-md"> 
                <Text text="LA GESTION IMMOBILIÈRE FACILE" className="mb-8 text-3xl text-center font-bold" />
                
                
                    <InputField
                        type="text" 
                        placeholder="Prenom" 
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        required 
                    />
                
                    <InputField
                        type="text" 
                        placeholder="Postnom" 
                        value={postnom}
                        onChange={(e) => setPostnom(e.target.value)}
                        required 
                    />
                
                    <InputField
                        type="text" 
                        placeholder="Nom" 
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required 
                    />
                
                    <InputField
                        type="text" 
                        placeholder="Pays De Residence" 
                        value={paysDeResidence}
                        onChange={(e) => setPaysDeResidence(e.target.value)}
                        required 
                    />
                
               
                    <InputEmail
                        type="email" 
                        placeholder="Adresse mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                
                    <Inputpassword 
                        type="password" 
                        placeholder="Mot de passe" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <Button type="submit" label="S'inscrire" className="w-full" />
                           </form>
        </div>     
        </div>     
    );
}

export default Register;