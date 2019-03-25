import axios from "axios";

const URL = "http://localhost:3000";

const addCard = title =>
  axios.post(`${URL}/board`, {
    title: title
  });

const deleteCard = id => axios.delete(`${URL}/board/${id}`);

const getCardsData = () =>
  axios.get(`${URL}/boards`).then(res => {
    console.log(res.data);
    return res.data;
  });

export default {
  addCard,
  getCardsData,
  deleteCard
};
