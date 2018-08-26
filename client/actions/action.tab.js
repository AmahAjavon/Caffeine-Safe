
export function goToNextTab(tab) {
    return {
        type: 'MOVE_TO_NEXT_TAB',
        tab: tab
    }
}

/**
 * function getCaffeineList, returns list of all
 * favorite caffeine drinks
 */
export function goToPreviousTab() {
    return {
        type: 'FETCH_ALL_CAFFEINE_ITEMS',
        tab: 0
    }
}
