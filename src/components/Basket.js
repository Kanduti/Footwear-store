import './Basket.css'
import {useState} from 'react'
const Basket = ({setBasket, basket}) => {
 
    
    return(
        <div>
            <table>
                <tr><td>Slika</td><td>Naziv</td><td>Cena</td></tr>
     {basket.map((item, index) => 
        <tr><td><img  className='shoplist'src={`data:image/png;base64,${item.Slika}`} alt="image unavialable" /></td><td>{item.Model_Naslov}</td>
        <td>{item["Market_price_in_€"]}€</td><td><button onClick={() => setBasket([...basket.slice(0, index), ...basket.slice(index+1)] )}>X</button></td>
        </tr>
       
    )}
    </table>
    <h2 style={{textAlign:'center'}}>Ukupno: {basket.reduce(function (acc, obj) { return acc + obj["Market_price_in_€"]; }, 0)}</h2>
    </div>
    )
}

export default Basket