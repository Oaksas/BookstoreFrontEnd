import React, { useEffect } from 'react';
import { AllBooks } from '../components';
import { isAuthenticated } from '../utils';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login');
        }
    }, []);
    return (

        <>
            <AllBooks />


        </>
    );
};

export default Home;
