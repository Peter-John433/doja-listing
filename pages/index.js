import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import { Component } from "react";
import { ThemeContext } from "@/store/ThemeContext";
import Button from "@/components/ui/Button";

const Index = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isShowLight, light, dark } = context;
        const theme = isShowLight ? light : dark;
        return (
          <>
            <Head>
              <title>doja home | doja-listing</title>
              <meta name="keywords" content="doja listing" />
            </Head>
            <div className="content container">
              <h1 className={styles.headText}>doja</h1>
              <div className={styles.content}>
                <p className={styles.paragraph}>
                  Welcome to Doja, where innovation meets creativity. Whether
                  you&apos;re here to explore cutting-edge solutions, discover
                  fresh ideas, or connect with a vibrant community, Doja is your
                  go-to destination. We believe in pushing boundaries,
                  redefining possibilities, and creating seamless experiences
                  that inspire. Join us on this journey and be part of something
                  extraordinary&quot;. Let me know if you&apos;d like a
                  different tone or more details
                </p>

                <p className={styles.doja}>
                  click on this link below to go doja page
                  <Link href="/doja" className={styles.btn}>
                    doja
                  </Link>
                </p>
              </div>
              <div
                style={{ background: theme.bgColor, color: theme.textColor }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                excepturi voluptatum maxime odio, mollitia atque nostrum
                deserunt. Veritatis, maiores qui. Neque suscipit distinctio
                tenetur consectetur, excepturi aut quasi quae in.
              </div>
            </div>
            <Button />
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Index;
