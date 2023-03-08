import React from 'react';
import { useState, useEffect,  } from 'react';
import Title from '@/components/UI/Title';
import { UserContext } from 'src/pages/_app';
import Input from '@/components/UI/Input';
import Notif from '@/components/UI/Notif';
import Button from '@/components/UI/Button';
import useFetch from '/src/hook/useFetch.js';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { HashLoader } from 'react-spinners'

const Index = () => {

  const router = useRouter();

  const value = React.useContext(UserContext);

  const [userForm, setUserForm] = useState(
    {
      email:"",
      password:""
    }
  );
  const { data, isLoading, error, fetchData } = useFetch('auth/login/freelance',{}, userForm, 'POST');

  

  const handleChange = (event) => {
    setUserForm({...userForm, [event.target.name]:event.target.value});
  };
  const submitRegister = (event) => {
    event.preventDefault();
    fetchData();
    //console.log(data);
  };

  const inputValue = [
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
    }
  ]
  useEffect(() => {
    if(data){
      if (data.auth == true){
          Cookies.set('token_cookie', data.token);
          console.log("cookie", data);
          router.push('/account');

      }
    }
  }, [data]);

  if (isLoading) {
    return <HashLoader color="#36d7b7" />;
  }
  
  return (
    <div>
      <p>{value}</p>
      <Title title="connexion" Level="h1"/>
      <form onSubmit={(e)=>submitRegister(e)}>
        {inputValue.map((input) => (
                    // eslint-disable-next-line react/jsx-key
            <Input type={input.type} name={input.name} placeholder={input.placeholder} required={input.required} onChange={(e)=>handleChange(e)} value={input.value}/>         
        ))}
        <Button type="submit" title="login" className="btn__primary"/>
      </form>
      
      {(() => {
        if (data) {
          if(data.auth == false){
            return <Notif type="warning" message={`${data.message}`}/>;
          }
        }
      })()}
    </div>
  );
}

export default Index;
