import React from 'react';
import PropTypes from "prop-types";

const foodIlike = [
  {
    id: 1,
    name: "Ramen",
    image: "https://i.ebayimg.com/images/g/lXgAAOxykmZTO9Z5/s-l300.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Steak",
    image: "https://t1.daumcdn.net/cfile/tistory/99AE51455C1B985108",
    rating: 4.9999
  },
  {
    id: 3,
    name: "Kimchi",
    image: "https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg",
    rating: 4.1
  },
  {
    id: 4,
    name: "빵또아",
    image: "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.0-0/p526x296/22046688_1910205318994606_9030169738656211030_n.png?_nc_cat=107&_nc_oc=AQl1pSIVTlndgwE6Rfct5nhKHpbq6bXcsYPp43jgWR4mccj77h2IxRgbbXNH5jvncN8&_nc_ht=scontent-gmp1-1.xx&oh=5131883e34a78b7119bcf68e08e414ea&oe=5DE92E20",
    rating: 3.8
  }
]

function Food({ name, picture, rating })
{
  return(
    <div>
      <h2>{name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  )
}

function App() {
  return (
    <div>
      {foodIlike.map(dish => (
        <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default App;