const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

export const contactsReduser = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "newcontact":
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };

    case "deletecontact": {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };
    }
    case "filter":
      return {
        ...state,
        filters: {
          name: action.payload,
        },
      };

    default:
      return state;
  }
};
