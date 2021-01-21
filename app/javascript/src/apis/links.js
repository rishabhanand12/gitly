import axios from "axios";

async function list() {
  return await axios.get("/links");
}

async function create(payload) {
  return await axios.post("/links", payload);
}

const linksApi = {
  list,
  create,
};

export default linksApi;
