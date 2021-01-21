import React from "react";

const Pin = ({ type = "unpinned", onClick }) => {
  function pin() {
    onClick("pinned");
  }

  function unPin() {
    onClick("unpinned");
  }

  return (
    <svg
      onClick={type === "unpinned" ? () => pin() : () => unPin()}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-pin"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={type === "unpinned" ? "#607D8B" : "#ffbf00"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
      <line x1="9" y1="15" x2="4.5" y2="19.5" />
      <line x1="14.5" y1="4" x2="20" y2="9.5" />
    </svg>
  );
};

export default Pin;
