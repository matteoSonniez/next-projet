import React from 'react';
import { useState } from 'react';
import Title from '@/components/UI/Title';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import useFetch from '/src/hook/useFetch.js';

const Index = () => {
  const [userForm, setUserForm] = useState(
    {
      email:"",
      password:"",
      firstName:"",
      lastName:"",
      postalCode:"",
      city:"",
      adresse:"",
      yearsXp:0,
      dailyPrice:0
    }
  );
  const { data, isLoading, error, fetchData } = useFetch('auth/register/freelance',{}, userForm, 'POST');

  const handleChange = (event) => {
    setUserForm({...userForm, [event.target.name]:event.target.value});
  };
  const submitRegister = (event) => {
    event.preventDefault();
    console.log(userForm);
    fetchData();
  };

  const inputValue = [
    {
      name:"lastName",
      placeholder:'name',
      required: true,
      type: "text",
      value: userForm.lastName
    },
    {
      name:"firstName",
      placeholder:'firstname',
      required: true,
      type: "text",
      value: userForm.firstName
    },
    {
      name:"password",
      placeholder:'password',
      required: true,
      type: "password",
      value: userForm.password
    },
    {
      name:"email",
      placeholder:'email',
      required: true,
      type: "email",
      value: userForm.email
    },
    {
      name:"city",
      placeholder:'city',
      required: true,
      type: "text",
      value: userForm.city
    },
    { 
      name:"adresse",
      placeholder:'adresse',
      required: true,
      type: "text",
      value: userForm.adresse
    },
    { 
      name:"postalCode",
      placeholder:'postal code',
      required: true,
      type: "text",
      value: userForm.postalCode
    },
    { 
      name:"yearsXp",
      placeholder:'years xp',
      required: true,
      type: "number",
      value: userForm.yearsXp
    },
    { 
      name:"dailyPrice",
      placeholder:'daily price',
      required: true,
      type: "number",
      value: userForm.dailyPrice
    }
]
  return (
    <div>
      <Title title="Inscription" Level="h1"/>
      <form onSubmit={(e)=>submitRegister(e)}>
        {inputValue.map((input) => (
                    // eslint-disable-next-line react/jsx-key
            <Input type={input.type} name={input.name} placeholder={input.placeholder} required={input.required} onChange={(e)=>handleChange(e)} value={input.value}/>         
        ))}
        <Button type="submit" title="register" className="btn__primary"/>
      </form>
    </div>
  );
}

export default Index;
