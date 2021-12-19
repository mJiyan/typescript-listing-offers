import React from 'react';
import { OfferType } from '../../redux/actions/Offer/types';
import { Card } from '..';
import { OFFER_PER_PAGE } from '../../services/constants';

type Props = {
  offers: Array<OfferType>;
  page: number;
};

const CardList: React.FC<Props> = ({ offers, page }) => {

  // this function is returning a selected page number
  const calculateIndex = (page: number): number => {
    return (page - 1) * OFFER_PER_PAGE;
  };

  // this function is returning a selected pages list
  const paginateOffers = (startIndex: number): Array<OfferType> => {
    return offers.slice(startIndex, startIndex + OFFER_PER_PAGE);
  };

  const startIndex = calculateIndex(page);
  const selectedOffers = paginateOffers(startIndex);

  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 items-center xl:mb-auto xl:h-10 ">
      {selectedOffers.map((offer: OfferType, index: number) => {
        return (
          <Card
            key={index}
            headlines={offer.headlines}
            prices={offer.prices}
            splashImages={offer.splashImages}
          />
        );
      })}
    </div>
  );
};

export default CardList;
