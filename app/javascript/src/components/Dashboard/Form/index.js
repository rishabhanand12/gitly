import React, { useState } from "react";

const Form = ({ onSubmit, url, setUrl }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={({ target: { value } }) => setUrl(value)}
          type="text"
          placeholder="Enter URL"
          value={url}
          name="url"
        />
        <input type="submit" value="Shorten URL" />
      </form>
    </>
  );
};

export default Form;
