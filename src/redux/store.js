import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./reduser";

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
});
