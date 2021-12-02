import React, { useState } from "react";
import { number } from "yup";
import { getAllGroupProductApi } from "../../apis/groupProduct/getAllGroupProduct.api";
import { getAllProductAsync } from "../../apis/product/getallproduct.api";
import HeroCommon from "../../components/HeroCommon";
import Pagination from "../../components/Pagination";
import ShopFilter from "./components/ShopFilter";
import ShopProduct from "./components/ShopProduct";

const ShopPage = () => {
  const [list, setList] = useState<any>([]);
  const [page, setPage] = useState<any>(1);
  const [groupProduct, setGroupProduct] = useState([]);
  const [query, setQuery] = useState({ limit: 15, skip: 1, groupProduct: "" });
  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const result = await getAllProductAsync(query);

    const { data, numberPage } = result;
    setPage(numberPage);
    setList(data);
  };

  const handleChangePage = async (page: number) => {
    const result = await getAllProductAsync({ ...query, skip: page });
    // setQuery({ ...query, skip: page });
    const { data, numberPage } = result;
    setPage(numberPage);
    setList(data);
  };

  const handleChangeCategory = async (key: string) => {
    const result = await getAllProductAsync({
      ...query,
      groupProduct: key,
      skip: 1,
    });
    setQuery({
      ...query,
      groupProduct: key,
    });
    console.log(query);
    const { data, numberPage } = result;
    setPage(numberPage);
    setList(data);
    console.log(result);
  };

  React.useEffect(() => {
    (async () => {
      const result = await getAllGroupProductApi();
      const { data } = result;
      setGroupProduct(data);
    })();
  }, []);

  return (
    <main>
      <HeroCommon />
      <section className="ftco-section">
        <div className="container">
          <ShopFilter
            groupProducts={groupProduct}
            changeCategory={handleChangeCategory}
          />
          <ShopProduct data={list} />
          <Pagination page={page} handleChangePage={handleChangePage} />
        </div>
      </section>
    </main>
  );
};

export default ShopPage;
