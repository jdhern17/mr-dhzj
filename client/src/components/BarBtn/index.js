import React, { Component } from "react";

const BarBtn = ({title}) => {
  return (
    <>
      <button type="button" class="text-reset btn btn-block btn-outline-secondary">
        {title}
      </button>
    </>
  );
};

export default BarBtn;
