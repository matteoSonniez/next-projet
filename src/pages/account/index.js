import React from 'react';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Profile from 'src/components/UI/Profile';
import useFetch from 'src/hook/useFetch';
import Button from 'src/components/UI/Button';
import Update from 'src/components/UI/UpdateUser';
import { HashLoader } from 'react-spinners'


const Index = () => {
    const [thecookie, setCookie] = useState(Cookies.get('token_cookie'));
    const { data, isLoading, error, fetchData } = useFetch('freelance',{'authorization': thecookie}, null, 'GET');
    const [showModal, setShowModal] = useState(false);
    
    const handleCloseModal = () => {
        setShowModal(false);
    };
    useEffect(() => {
        fetchData();
      }, []);
      useEffect(() => {
        fetchData();
      }, [data]);
    return (
        <div>
            {(() => {
                if (data) {
                    if(showModal){
                        return <Update user={data} onSave={handleCloseModal}></Update> 
                    }else{
                        return <><Profile user={data}></Profile> <button  onClick={() => setShowModal(true)}>modifier profile</button> <Button type="submit" title="modifier" handleClick={() => setShowModal(true)} className="btn__primary"/></>
                    }
                }
            })()}
        </div>
    );
}

export default Index;

