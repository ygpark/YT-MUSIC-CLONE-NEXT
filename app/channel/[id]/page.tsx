import React from "react";

interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string>;
  // Add any other props your component expects
}

const page: React.FC<PageProps> = (props) => {
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
