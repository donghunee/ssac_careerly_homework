import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeComponents from "../../components/home/HomeComponents";

function HomeContainer() {
  const baseURL = "http://localhost:3000";
  const [membership, setMembership] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${baseURL}/membership`,
    })
      .then((response) => {
        const result = response.data.data;
        setMembership(result);
        console.log(result);
        console.log("조회 성공");
      })
      .catch((err) => {
        console.log("조회 실패");
      });
    // async function getAllData() {
    //   const response = await axios({
    //     method: "GET",
    //     url: `${baseURL}/membership`,
    //   });

    //   if (response.status === 200) {
    //     const result = response.data.data;
    //     console.log(result);
    //     setMembership(result);
    //   } else {
    //     console.log("조회 실패");
    //   }
    // }
    // getAllData();
  }, []);

  return <HomeComponents membership={membership} />;
}

export default HomeContainer;
