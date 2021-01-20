import React, { useEffect, useState } from "react";
import linksApi from "api/links";

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLinks();
  });

  const fetchLinks = async () => {
    try {
      const response = await linksApi.list();
      setLinks(response.data.links);
      setLoading(false);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <>
      <div>
        <form>{/* Input and submit button */}</form>
      </div>
      <div>
        {/* <Table></Table> */}
      </div>
    </>
  );
};

export default Dashboard;
