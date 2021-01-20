import axios from "axios";

async function list() {
  return await axios.get("/link");
}

async function create(payload) {
  return await axios.post("/link", payload);
}

linksApi = {
  list,
  create,
};

export default linksApi;
