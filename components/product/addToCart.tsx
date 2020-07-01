import { Formik } from "formik";

import Select from "../select";
import Btn from "../button";

export default function addToCart() {
  return (
    <Formik initialValues={{}} onSubmit={() => console.log("submitted")}>
      <form className="flex gap-3 mt-10">
        <Select></Select>
        <Btn className="flex-1">Aggiungi al carrello</Btn>
      </form>
    </Formik>
  );
}
