import { KEY_LOCALSTORAGE } from '../constants';
import { contactData } from '../contactsData';

export const getContactList = () => {
  const strSavedData = localStorage.getItem(KEY_LOCALSTORAGE);

  const devMode = import.meta.env.VITE_DEV_MODE === 'true';

  if (!strSavedData) return devMode ? contactData : [];
  return JSON.parse(strSavedData);
};
