import React from 'react';
import { OfferType } from '../../redux/actions/Offer/types';
import fallBackImage from '../../assets/images/fallbackImage.png';

const Card: React.FC<OfferType> = ({ headlines, prices, splashImages }) => {
  return (
    <div className="flex items-center justify-center p-3">
      <div className="rounded overflow-hidden shadow-lg h-64 w-64 bg-gray-100">
        {splashImages !== undefined ? (
          <img className="w-full" src={splashImages?.[0].wideMedium} />
        ) : (
          <img className="w-full" src={fallBackImage} />
        )}
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-orange-600 text-lg "> {headlines.description}</p>
          <p className="text-sm">
            {prices.totalPrice.amount.display} {prices.totalPrice.amount.currency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
