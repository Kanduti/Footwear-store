import './Favorites.css'
import {newFavorite} from '../../reducers/favoritesReducer'
import { useSelector, useDispatch } from 'react-redux'

const Favorites = () => {
  const dispatch = useDispatch()
    const favorites = useSelector(state => state)
    console.log(favorites);

    return(
        <div>
            <table>
                <tr><td>Slika</td><td>Naziv</td><td>Cena</td></tr>
     {favorites.favorite.map((item, index) => 
        <tr><td><img  className='shoplist'src={`data:image/png;base64,${item.Slika}`} alt="image unavialable" /></td><td>{item.Model_Naslov}</td>
        <td>{item["Market_price_in_€"]}€</td><td><button onClick={() => dispatch(newFavorite({type: 'remove', payload: item.Model_Naslov} ))}>X</button></td>
        </tr>
       
    )}
    </table>
    <h2 style={{textAlign:'center'}}>Ukupno: {favorites.favorite.reduce(function (acc, obj) { return acc + obj["Market_price_in_€"]; }, 0)}</h2>
    </div>
    )
}

export default Favorites