export const nameUtil = (name) => {
  return `${name.title} ${name.first} ${name.last}`;
};

export const addressUtil = (address) => {
  return `${address.street.number}, ${address.street.name}, ${address.city}, ${address.state}, ${address.country}, ${address.postcode}`;
};
