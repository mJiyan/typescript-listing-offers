import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { Loading, Header, CardList, Pagination } from '../../components';
import { Error } from '..';
import * as actions from '../../redux/actions/Offer';
import { OFFER_PER_PAGE } from '../../services/constants';

const Offers = () => {
  const dispatch = useDispatch();
  const offerState = useSelector((state: RootStore) => state.offer);
  const loading = useRef(false);

  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  // calling the list function
  useEffect(() => {
    dispatch(actions.GetOffers());
    loading.current = offerState.loading;
  }, [loading.current]);

  // after calling the list function, set the pagination configuration
  useEffect(() => {
    let offersLength = offerState.offer !== undefined ? offerState.offer.length : 0;
    let totalPages = totalPage(offersLength);
    setTotalPages(totalPages);
  }, [offerState.offer]);

  // setting the page current page number
  const changePage = (pageNumber: number): void => {
    setPage(pageNumber);
  };

  // calculate the total page number for the all list
  const totalPage = (offersLength: number): number => {
    return Math.ceil(offersLength / OFFER_PER_PAGE);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      {(offerState.loading === true && <Loading />) ||
        (offerState.offer && (
          <>
            <CardList offers={offerState.offer} page={page} />
            <Pagination totalPages={totalPages} changePage={changePage} page={page} />
          </>
        )) ||
        (offerState?.error && <Error />)}
    </div>
  );
};

export default Offers;
