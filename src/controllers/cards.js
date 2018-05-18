import { fetchCards } from "./requestHandler";

export const findCard = async (req, res) => {
  const cards = await fetchCards(req.query, res);
  res.send(cards);
};
