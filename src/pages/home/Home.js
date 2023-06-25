/* eslint-disable */
import { useEffect, useState } from "react";
import axios from "axios";
import "../home/any.txt";
import { io } from "socket.io-client";
const socket = io.connect("http://localhost:3001");

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/home")
      .then((response) => {
        setData(response.data.msg);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>Welcome to home</div>
      <div>{data}</div>
    </div>
  );
}
export default Home;
