//ACTION GENERATOR for filter reducer

export const setFilterText = (text = '') => {
    return {
        type: 'SET_FILTER_TEXT',
        text
    }
};

export const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
};

export const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
};

export const setStartDate = (startDate = undefined) => {
    return  {
        type: 'SET_START_DATE',
        startDate
    }
};

export const setEndDate = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}