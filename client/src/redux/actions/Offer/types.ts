export const OFFERS_LOADING = "OFFERS_LOADING";
export const OFFERS_FAIL = "OFFERS_FAIL";
export const OFFERS_SUCCESS = "OFFERS_SUCCESS";

export type OfferType = {
    headlines: OfferName,
    prices: OfferPrice,
    splashImages?: OfferImage
}

export type OfferName = {
    description: string
}

export type OfferPrice = {
    totalPrice: {
        amount: {
            display: string,
            currency: string
        }
    }
}

export type OfferImage = {
    0: {
        wideMedium: string
    }
}

export type Offers = {
    offers: Array<OfferType>
}

interface OfferLoading {
    type: typeof OFFERS_LOADING;
}

interface OfferFail {
    type: typeof OFFERS_FAIL;
}

interface OfferSuccess {
    type: typeof OFFERS_SUCCESS;
    payload: Array<OfferType>
}

export type OfferDispatchTypes = OfferLoading | OfferFail | OfferSuccess;