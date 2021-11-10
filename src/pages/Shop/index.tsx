import React, { useState } from "react";
import { getAllProductAsync } from "../../apis/product/getallproduct.api";
import HeroCommon from "../../components/HeroCommon";
import Pagination from "../../components/Pagination";
import ShopFilter from "./components/ShopFilter";
import ShopProduct from "./components/ShopProduct";

const ShopPage = () => {
  const [list, setList] = useState<any>([]);
  React.useEffect(() => {
    getData();
  }, []);
  const getData = async (page: number = 1) => {
    const result = await getAllProductAsync({ limit: 20, skip: page });
    const { data } = result;
    setList(data);
  };
  return (
    <main>
      <HeroCommon />
      <section className="ftco-section">
        <div className="container">
          <ShopFilter />
          <ShopProduct data={list} />
          <Pagination />
        </div>
      </section>
    </main>
  );
};

export default ShopPage;
