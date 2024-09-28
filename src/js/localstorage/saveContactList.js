import { KEY_LOCALSTORAGE } from '../constants';

export const saveContactList = contact => {
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(contact));
};
