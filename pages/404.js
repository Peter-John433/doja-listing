import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <div className="content container not-found">
      <h1>page not found...</h1>
      <p>go backk to the homepage by clicking the link down below</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default NotFound;
