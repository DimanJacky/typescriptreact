import {createSelector} from "reselect";

const shopItemsSelector = (state: any) => state.shop.items
const taxPercentSelector = (state: any) => state.shop.taxPercent

const subtotalSelector = createSelector(
    shopItemsSelector,
    items => items.reduce((acc: any, item: any) => acc + item.value, 0)
)

export const taxSelector = createSelector(
    subtotalSelector,
    taxPercentSelector,
    (subtotal, taxPercent) => {
        console.log('subtotal', subtotal);
        console.log('taxPercent', taxPercent);
        return subtotal * (taxPercent / 100);
    }
)
