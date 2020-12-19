import React from 'react';
import { withSwapiService } from '../hoc-helper';
import ItemDetails, { Record } from '../item-details';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);