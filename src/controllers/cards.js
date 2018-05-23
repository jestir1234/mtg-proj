import { fetchCards } from "./requestHandler";

export const findCard = async (query, h) => {
  const cards = await fetchCards(query, h);
  return cards;
};
