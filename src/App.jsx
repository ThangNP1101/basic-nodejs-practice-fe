import { useEffect } from "react";
import axios from "./utils/axios.customize.js";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api/`);
      console.log(">>> check res: ", res.data);
    };

    fetchHelloWorld();
  }, []);
  return <>hello world</>;
}

export default App;
