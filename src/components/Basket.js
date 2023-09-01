import './Basket.css'
import {newArtikl} from '../reducers/artiklReducer'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
const Basket = ({setBasket, basket}) => {
    const artikl = useSelector(state=>state)
    const dispatch = useDispatch()
    
    return(
        <div>
            <table>
                <tr><td>Slika</td><td>Naziv</td><td>Cena</td></tr>
     {artikl.artikl.map((item, index) => 
        <tr><td><img  className='shoplist'src={`data:image/png;base64,${item.Slika}`} alt="image unavialable" /></td><td>{item.Model_Naslov}</td>
        <td>{item["Market_price_in_€"]}€</td><td><button onClick={() => dispatch(newArtikl({type:'remove', payload: item.Model_Naslov}))}>X</button></td>
        </tr>
       
    )}
    </table>
    <h2 style={{textAlign:'center'}}>Ukupno: {artikl.artikl.reduce(function (acc, obj) { return acc + obj["Market_price_in_€"]; }, 0)}</h2>
    </div>
    )
}

export default Basket