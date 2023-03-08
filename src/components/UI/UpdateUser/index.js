import React from 'react';
import Input from 'src/components/UI/Input';
import Button from 'src/components/UI/Button';
import useFetch from '/src/hook/useFetch.js';
import Cookies from 'js-cookie';
import { useState, useEffect,  } from 'react';

const Index = ({user, onSave}) => {
    const [thecookie, setCookie] = useState(Cookies.get('token_cookie'));

    const [userForm, setUserForm] = useState(
        {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        }
      );
    
    const { data, isLoading, error, fetchData } = useFetch('freelance/update',{'authorization': thecookie}, userForm, 'PUT');


    const handleChange = (event) => {
        setUserForm({...userForm, [event.target.name]:event.target.value});
    };

    const submitRegister = (event) => {
        event.preventDefault();
        fetchData();
        onSave();
        //console.log(data);
    };

    return (
        <div>
            <form onSubmit={(e)=>submitRegister(e)}>
                <Input type={"email"} name={"email"} placeholder={"test"} onChange={(e)=>handleChange(e)} required={true} value={userForm.email}/>
                <Input type={"text"} name={"firstName"} placeholder={"test"} onChange={(e)=>handleChange(e)} required={true} value={userForm.firstName}/>
                <Input type={"text"} name={"lastName"} placeholder={"test"} onChange={(e)=>handleChange(e)} required={true} value={userForm.lastName}/>
                <Button type="submit" title="modifier" className="btn__primary"/>
            </form>
        </div>
    );
}

export default Index;
