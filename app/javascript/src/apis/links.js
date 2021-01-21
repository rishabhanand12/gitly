import axios from "axios";

async function list() {
  return await axios.get("/links");
}

async function create(payload) {
  return await axios.post("/links", payload);
}

async function update(id, payload) {
  return await axios.put(`/links/${id}`, payload);
}

async function show(id) {
  return await axios.get(`/links/${id}`);
}

const linksApi = {
  list,
  create,
  update,
  show
};

export default linksApi;
