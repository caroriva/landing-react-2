import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
        <Products />
        <Footer />
      </Layout>
    </>
  );
}

export default Home;
