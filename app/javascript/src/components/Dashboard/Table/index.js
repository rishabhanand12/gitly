import React from "react";
import Pin from "./Pin";

const Table = ({ data, pinToggle, onShortUrlClick }) => {
  return (
    <table className="link-table padding">
      <thead></thead>
      <tbody>
        {data.map((elem, index) => {
          return (
            <tr>
              <td>
                <Pin
                  type={elem.pinned}
                  onClick={(state) => pinToggle(elem.id, state, index)}
                />
              </td>
              <td>
                <a href={elem.original_url} target="blank">
                  {elem.original_url}
                </a>
              </td>
              <td className="short-url"
                onClick={() => onShortUrlClick(elem.id, index)}
              >{`http://localhost:3000/${elem.short_url}`}</td>
              <td>{elem.click_counts}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
