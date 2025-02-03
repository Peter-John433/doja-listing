import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { userNames: data },
  };
};

const index = ({ userNames }) => {
  return (
    <div className="content container">
      <h1>welcome to doja listing simple app project. </h1>

      {userNames.map((userName) => (
        <Link href={"/doja/" + userName.id} key={userName}>
          <h3>{userName.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default index;
