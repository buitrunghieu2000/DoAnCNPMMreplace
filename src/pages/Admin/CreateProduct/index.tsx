import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getAllGroupProductApi } from "../../../apis/groupProduct/getAllGroupProduct.api";
import { createProductApi } from "../../../apis/product/createProduct.api";
import { ButtonSpinner } from "../../../components/ButtonSpinner";
import { createProductSchema } from "../../../validate/auth";

interface CreateProductPageProps {}

const CreateProductPage = (props: CreateProductPageProps) => {
  const [groupProduct, setGroupProduct] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: yupResolver(createProductSchema) });

  const submit = async (data: any, e: any) => {
    e.preventDefault();
    console.log(data);
    // const result = await createProductApi(data);
    // console.log(result);
  };

  React.useEffect(() => {
    (async () => {
      const result = await getAllGroupProductApi();
      const { data } = result;

      setGroupProduct(data);
    })();
  }, []);

  return (
    <div className="createProduct container d-flex flex-column w-50">
      <form onSubmit={handleSubmit(submit)}>
        <p className="navbar-brand">Add Product</p>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="form-control"
          placeholder="Name"
        />
        <p className="text-danger">{errors.name?.message}</p>
        <input
          type="text"
          id="detail"
          {...register("detail")}
          className="form-control"
          placeholder="Detail"
        />
        <p className="text-danger">{errors.detail?.message}</p>
        <input
          type="text"
          id="price"
          {...register("price")}
          className="form-control"
          placeholder="Price"
        />
        <p className="text-danger">{errors.price?.message}</p>
        {/* <input
          type="text"
          id="groupProduct"
          {...register("groupProduct")}
          className="form-control"
          placeholder="Group Product"
        />
        <p className="text-danger">{errors.groupProduct?.message}</p> */}

        <Form.Select {...register("groupProduct")}>
          <option>Group Product</option>
          {groupProduct.map((item: any, i: number) => (
            <option key={i}>{item.key}</option>
          ))}
        </Form.Select>
        <p className="text-danger">{errors.groupProduct?.message}</p>

        <input
          type="number"
          id="weight"
          {...register("weight")}
          className="form-control"
          placeholder="Weight"
        />
        <p className="text-danger">{errors.weight?.message}</p>
        <input
          type="number"
          id="quantity"
          {...register("quantity")}
          className="form-control"
          placeholder="Quantity"
        />
        <p className="text-danger">{errors.quantity?.message}</p>

        <div className="custom-file">
          <input
            multiple
            type="file"
            className="custom-file-input"
            id="validatedCustomFile"
            {...register("image")}
            required
          />
          <label className="custom-file-label">Image</label>
          <div className="invalid-feedback">
            Example invalid custom file feedback
          </div>
        </div>

        <p></p>

        <button
          id="login"
          className="btn btn-block login-btn mb-4"
          type="submit"
          disabled={isSubmitting}
          style={{ backgroundColor: "#82ae46" }}
        >
          {!isSubmitting ? "Submit" : <ButtonSpinner />}
        </button>
      </form>
    </div>
  );
};

export default CreateProductPage;
