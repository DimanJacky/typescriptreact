import { createSelector } from 'reselect'

const shopItemsSelector = (state: any) => state.shop.items
const taxPercentSelector = (state: any) => state.shop.taxPercent

const subtotalSelector = createSelector(
    shopItemsSelector,
    items => items.reduce((acc: any, item: any) => acc + item.value, 0)
)

const taxSelector = createSelector(
    subtotalSelector,
    taxPercentSelector,
    (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)

export const totalSelector = createSelector(
    subtotalSelector,
    taxSelector,
    (subtotal, tax) => ({ total: subtotal + tax })
)




