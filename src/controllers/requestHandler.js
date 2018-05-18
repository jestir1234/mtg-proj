import axios from "axios";

export const fetchCards = async params => {
  let response = await axios
    .get(
      `https://api.magicthegathering.io/v1/cards?${Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join("&")}`
    )
    .catch(err => console.error(err));
  return response.data.cards;
};
