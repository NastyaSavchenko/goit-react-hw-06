const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addContact":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };

    case "deleteContact":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };

    case "filter":
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload,
        },
      };

    default:
      return state;
  }
};
