import React from 'react';

function Basket(props) {
    const {login} = props;
    return (
        <>
            {login ? <></> : null}
        </>
    );
}

export default Basket;