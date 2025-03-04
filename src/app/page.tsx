import React from "react";
import styles from "./page.module.css";
import CategoryList from "@/components/categoryList/categoryList";
import Featured from "@/components/featured/Featured";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const Home = (): React.ReactNode => {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
