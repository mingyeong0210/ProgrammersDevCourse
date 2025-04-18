import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    // <Layout children={<Home />}/>
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
