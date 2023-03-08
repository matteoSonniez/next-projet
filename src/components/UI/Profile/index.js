import React from 'react';

const Index = ({user}) => {
    return (
        <div>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
        </div>
    );
}

export default Index;
