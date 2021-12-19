const defaultState = {
  offer: {
    loading: false,
    offer: {
      prices: {
        totalPrice: {
          amount: {
            display: '',
            currency: '',
          },
        },
      },
      splashImages: [
        {
          wideMedium: '',
        },
      ],

      headlines: {
        description: '',
      },
    },
    error: false,
  },
  offers: [
    {
      prices: {
        totalPrice: {
          amount: {
            display: '209,96',
            currency: 'EUR',
          },
        },
      },
      splashImages: [
        {
          wideMedium: 'https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-01.jpg',
        },
      ],

      headlines: {
        description: 'Audi A3 Sedan',
      },
    },
  ],
  page: 1,
  changePage: (pageNumber) => {
    setPage(pageNumber);
  },
  totalPages: 12,
  lastPage: 12
};

export default defaultState;
