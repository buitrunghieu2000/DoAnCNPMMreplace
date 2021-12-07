import React, { useState } from "react";
import { getAllGroupProductApi } from "../../../apis/groupProduct/getAllGroupProduct.api";
import { getAllProductApi } from "../../../apis/product/getallproduct.api";
import HeroCommon from "../../../components/HeroCommon";
import Pagination from "../../../components/Pagination";
import ShopProduct from "./components/ShopProduct";

const UpdateProduct = () => {
  const [list, setList] = useState<any>([]);
  const [page, setPage] = useState<any>(1);
  // const [groupProduct, setGroupProduct] = useState([]);
  const [query, setQuery] = useState({ limit: 15, skip: 1, groupProduct: "" });
  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const result = await getAllProductApi(query);

    const { data, numberPage } = result;
    setPage(numberPage);
    setList(data);
  };

  const handleChangePage = async (page: number) => {
    const result = await getAllProductApi({ ...query, skip: page });
    // setQuery({ ...query, skip: page });
    const { data, numberPage } = result;
    setPage(numberPage);
    setList(data);
  };

  // React.useEffect(() => {
  //   (async () => {
  //     const result = await getAllGroupProductApi();
  //     const { data } = result;
  //     setGroupProduct(data);
  //   })();
  // }, []);

  return (
    <main>
      <HeroCommon />
      <section className="ftco-section">
        <div className="container">
          <ShopProduct data={list} />
          <Pagination page={page} handleChangePage={handleChangePage} />
        </div>
      </section>
    </main>
  );
};

export default UpdateProduct;
