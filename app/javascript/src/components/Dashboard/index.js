import React from "react";

import Form from "./Form";
import Table from "./Table";
import Container from "../Container";
import linksApi from "../../apis/links";

const Dashboard = (_props) => {
  const [links, setLinks] = React.useState(null);
  const [url, setUrl] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  const fetchLinks = async () => {
    try {
      const response = await linksApi.list();
      setLinks(response.data.links);
      setLoading(false);
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleSubmit = async () => {
    event.preventDefault();
    try {
      await linksApi.create({ link: { original_url: url } });
    } catch (e) {
      throw new Error(e);
    }
  };

  const updateLinks = (index, state) => {
    const updatedLinks = links.map((elem, i) => {
      if (i === index) elem.pinned = state;
      return elem;
    });
    setLinks(updatedLinks);
  };

  const updateLinksCount = (index) => {
    const updatedLinks = links.map((elem, i) => {
      if (i === index) elem.click_counts++;
      return elem;
    });
    setLinks(updatedLinks);
  };

  const handlePinToggle = async (id, state, index) => {
    try {
      const response = await linksApi.update(id, { link: { pinned: state } });
      updateLinks(index, state);
    } catch (e) {
      throw new Error(e);
    }
  };

  const retrieveUrl = async (id, index) => {
    try {
      const response = await linksApi.show(id);
      window.open(response.data.link.original_url)
      updateLinksCount(index);
    } catch (e) {
      throw new Error(e);
    }
  };

  React.useEffect(() => {
    fetchLinks();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <>
        <Container>
          <div>
            <Form onSubmit={handleSubmit} url={url} setUrl={setUrl} />
          </div>
          <div>
            {!links ? (
              <p>No Links present</p>
            ) : (
              <Table
                data={links}
                pinToggle={handlePinToggle}
                onShortUrlClick={retrieveUrl}
              />
            )}
          </div>
        </Container>
      </>
    );
  }
};

export default Dashboard;
