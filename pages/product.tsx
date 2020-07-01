import Layout from "../components/layout";
import Details from "../components/product/details";

export default function product() {
  return (
    <>
      <Layout>
        <div className="container">
          <Details />
        </div>
      </Layout>
    </>
  );
}
