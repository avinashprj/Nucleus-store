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
        console.log(newFilterProperty);
      } else {
        newFilterProperty = newFilterProperty.concat(selectedFilter);
        console.log(newFilterProperty);
      }
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          [payload.property]: newFilterProperty,
        },
      };
    }
    case 'PRICE': {
      return { ...state, price: payload };
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

function dispatchFilterProperties(dispatch, payload) {
  console.log(payload, 'payload');
  dispatch({
    type: 'FILTER',
    payload: {
      property: payload.property,
      selection: payload.category,
    },
  });
}

function dispatchSort(dispatch, sortItem) {
  dispatch({ type: 'SORT', payload: sortItem });
}

function dispatchPrice(dispatch, event) {
  dispatch({ type: 'PRICE', payload: event.target.value });
}
export { Reducer, dispatchFilterProperties, dispatchSort, dispatchPrice };
