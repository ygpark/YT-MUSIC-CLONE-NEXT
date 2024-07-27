import React from "react";

const page = (props) => {
  console.log(props);
  const searchParams = JSON.stringify(props.searchParams);
  return (
    <div>
      <div>props.params.id = {props.params.id}</div>
      <div>props.params.searchParams = {searchParams}</div>
    </div>
  );
};

export default page;
