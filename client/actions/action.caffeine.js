
import caffeineItems from '../constants/index'

export function getSingleCaffeineItem(item) {
    return {
        type: 'FETCH_SINGLE_ITEM',
        item: item
    }
}

export function clearSingleCaffeineItem() {
    return {
        type: 'CLEAR_SINGLE_ITEM',
        item: {}
    }
}

/**
 * function getCaffeineList, returns list of all
 * favorite caffeine drinks
 */
export function getCaffeineList() {
    return {
        type: 'FETCH_ALL_CAFFEINE_ITEMS',
        itemsList: caffeineItems
    }
}
