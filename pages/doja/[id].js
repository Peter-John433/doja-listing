import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((userId) => {
    return {
      params: { id: userId.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { getUserDetails: data },
  };
};

const dojaListing = ({ getUserDetails }) => {
  return (
    <div className="content container">
      <h1>user details</h1>
      <h3>
        name: <span>{getUserDetails.name}</span>
      </h3>
      <p>
        email: <span>{getUserDetails.email}</span>
      </p>
      <p>
        website: <span>{getUserDetails.website}</span>
      </p>
    </div>
  );
};

export default dojaListing;
