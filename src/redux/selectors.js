export const getContacts = state => state.contacts.items;
export const filterContact = state => state.filter;
export const isLoading = state => state.contacts.isLoading;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
