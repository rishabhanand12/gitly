import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";

import linksApi from "../../apis/links";

const Dashboard = (_props) => {
  const [links, setLinks] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchLinks = async () => {
    try {
      const response = await linksApi.list();
      setLinks(response.data.links);
      setLoading(false);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleSubmit = async () => {
    event.preventDefault();
    try {
      await linksApi.create({ link: { original_url: url } });
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <>
        <div>
          <Form onSubmit={handleSubmit} url={url} setUrl={setUrl} />
        </div>
        <div>{!links ? <p>No Links present</p> : <Table data={links} />}</div>
      </>
    );
  }
};

export default Dashboard;
