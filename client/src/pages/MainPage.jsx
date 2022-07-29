import React, {useState} from 'react';
import ProductCard from "../components/ProductCard";

function MainPage(props) {
    const [search, setSeatch] =useState('');
    const [data, setData] = useState('')
    const [basket, setBasket] =useState('')
    const [login, setLogin] = useState('false')

    return (

        <div>
            {!data && data.map((item, index) =>{
                return <ProductCard key = {index} data = {item}/>
            })}
        </div>
    );
}

export default MainPage;