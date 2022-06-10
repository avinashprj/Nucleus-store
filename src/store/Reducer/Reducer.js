function Reducer(state, { type, payload }) {
  switch (type) {
    case 'LOGGEDIN': {
      return { ...state, userID: payload };
    }
    case 'PRODUCTS': {
      return {
        ...state,
        productsList: [...payload],
      };
    }
    case 'SORT': {
      return { ...state, sortBy: payload };
    }
    case 'FILTER': {
      let newFilterProperty = state.filterBy[payload.property];
      const selectedFilter = payload.selection;
      if (state.filterBy[payload.property].includes(selectedFilter)) {
        newFilterProperty = newFilterProperty.filter(
          (item) => item !== selectedFilter
        );
      } else {
        newFilterProperty = newFilterProperty.concat(selectedFilter);
      }
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          [payload.property]: newFilterProperty,
        },
      };
    }
    case 'RATING': {
      return { ...state, rating: payload };
    }
    case 'CLEAR FILTER': {
      return {
        ...state,
        sortBy: '',
        filterBy: { categories: [], color: [] },
        rating: 5,
      };
    }

    default:
      return state;
  }
}
export { Reducer };
