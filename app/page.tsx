import React from "react";
// import { Button } from "@mui/material";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Nav from "./pages/Nav";
import Content from "./pages/Content";
function page() {
  return (
    <>
      <div className="">
        <div className="">
          <Nav />
          <div className="bg-purple-300 ">
            <Header />

            <Content />
            <div className="">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

// <>
// <div className="">
//   <br />
//   <p className="flex justify-center ">나의 음악 찾기 기능</p>
//   <br />
//   <p className="flex justify-center ">
//     간단한 설문을 통해 음악 추천을 받아보세요!
//   </p>
//   <div>
//   </div>
//   <div className="flex justify-center  bg-purple-200">
//     <Button variant="outlined">시작하기</Button>
//   </div>
// </div>
// </>
