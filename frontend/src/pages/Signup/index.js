import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Signup } from './styled';
import SectionTitle from '../../components/SectionTitle';
import { api } from '../../api';
import utils from '../../utils/utils';
import { Context } from '../../contexts/context';


const App = () => {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [postcode, setPostcode] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { dispatch } = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {
        window.scroll(0, 400);
    }, []);

    const signup = async (e) => {
        e.preventDefault();

        const isValidData = validateData();

        if (isValidData) {

            const data = {
                name,
                cpf,
                rg,
                street,
                houseNumber,
                district,
                postcode,
                mobileNumber,
                email,
                password
            }

            const message = await api.signup(data);
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    text: message.body, 
                    icon: 'BsCheck2Circle', 
                    colorIcon: '#176EE2', 
                    colorText: '#0F68BF' 
                }
            });
            cleanStates();
            navigateToHome();
        } else {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    text: 'Preencha todos os campos para continuar.', 
                    icon: 'BiError', 
                    colorIcon: '#FFC700', 
                    colorText: '#707070' 
                }
            });
        }
    };

    const validateData = () => {
        return utils.isValidString(name) &&
            utils.isValidString(cpf) &&
            utils.isValidString(rg) &&
            utils.isValidString(street) &&
            utils.isValidString(houseNumber) &&
            utils.isValidString(district) &&
            utils.isValidString(postcode) &&
            utils.isValidString(mobileNumber) &&
            utils.isValidString(email) &&
            utils.isValidString(password)
    };

    const cleanStates = () => {
        setName('');
        setCpf('');
        setRg('');
        setStreet('');
        setHouseNumber('');
        setDistrict('');
        setPostcode('');
        setmobileNumber('');
        setEmail('');
        setPassword('');
    };

    const navigateToHome = () => {
        navigate('/');
    };


    return (
        <Signup>
            <SectionTitle title="Cadastre-se" width="300" colorBar="#C4C4C4" />
            <form className='signup__form'>
                <div className='signup__form-inputs-area'>
                    <input className="signup__input" value={name} type="text" placeholder='nome' onChange={e => setName(e.target.value)}/>
                    <input className="signup__input" value={cpf} type="number" placeholder='CPF' onChange={e => setCpf(e.target.value)}/>
                    <input className="signup__input" value={rg} type="number" placeholder='RG' onChange={e => setRg(e.target.value)}/>
                    <input className="signup__input" value={street} type="text" placeholder='Rua' onChange={e => setStreet(e.target.value)}/>
                    <input className="signup__input" value={houseNumber} type="text" placeholder='número da casa' onChange={e => setHouseNumber(e.target.value)}/>
                    <input className="signup__input" value={district} type="text" placeholder='bairro' onChange={e => setDistrict(e.target.value)}/>
                    <input className="signup__input" value={postcode} type="number" placeholder='CEP' onChange={e => setPostcode(e.target.value)}/>
                    <input className="signup__input" value={mobileNumber} type="number" placeholder='Telefone' onChange={e => setmobileNumber(e.target.value)}/>
                    <input className="signup__input" value={email} type="text" placeholder='email' onChange={e => setEmail(e.target.value)}/>
                    <input className="signup__input" value={password} type="password" placeholder='senha' onChange={e => setPassword(e.target.value)}/>
                </div>
                <button className="signup__btn" onClick={signup}>Cadastrar</button>
            </form>
        </Signup>
    );

};

export default App;