import React from "react";
import PropTypes from 'prop-types';

const foodLike = [
  {
    'id': 1,
    'name': 'борщ',
    'image': 'https://vosmarket.ru/uploads/posts/2018-11/1541331854_vosmarket_ru-xinkali-0.jpg',
    'rating': 5.0
  },
  {
    'id': 2,
    'name': 'драники',
    'image': 'https://vosmarket.ru/uploads/posts/2018-11/1541331854_vosmarket_ru-xinkali-0.jpg',
    'rating': 4.3
  },
  {'id': 3,
    'name': 'стейк',
    'image': 'https://vosmarket.ru/uploads/posts/2018-11/1541331854_vosmarket_ru-xinkali-0.jpg',
    'rating': 3.7
  },
  {
    'id': 4,
    'name': 'хинкали',
    'image': 'https://vosmarket.ru/uploads/posts/2018-11/1541331854_vosmarket_ru-xinkali-0.jpg',
    'rating': 4.9
  }
];

function Food({name, picture, rating}) {
  return (
      <div>
        <h3>Я люблю {name}</h3>
        <h4>{rating} / 5.0</h4>
        <img src={picture} alt=""/>
      </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function renderFood(dish) {
 return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div>
      {console.log(foodLike.map(renderFood))}
      {foodLike.map(renderFood)}
    </div>
  );
}

export default App;
