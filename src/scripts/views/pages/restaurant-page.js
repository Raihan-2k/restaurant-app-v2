import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantPage = {
  async render() {
    return `
    <div class="hero"></div>
    <h2 class="explore__title">Explore Restaurant</h2>
    <div class="restaurant__list" id="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.RestaurantPage();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantPage;
