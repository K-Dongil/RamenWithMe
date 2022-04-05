/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';

const Test: NextPage = () => {
  let obtest = {
    "94": "안성탕면",
    "201": "불닭볶음면",
    "73": "올리브짜파게티",
  };

  let [data, setData] = useState([]);
  let [like, setLike] = useState(false);
  useEffect(() => {
    axios
      .get("http://j6c104.p.ssafy.io:8084/v1/recommend/ubcf/29")
      .then((result) => {
        console.log("ubcf추천성공");
        console.log(result);
        // setData(result.data);
      })
      .catch((error) => {
        console.log("ubcf추천실패");
        // setLike(true)
        console.log(error);
      });
  }, []);
  // 빈배열 한번 실행

  return (
    <>
      <h1>axios테스트</h1>
      {/* {data} */}
      <button
        onClick={() => {
          axios
            .get("http://j6c104.p.ssafy.io:8080/v1/ramen/islike/7/1")
            .then((result) => {
              console.log("요청성공");
              console.log(result);
              console.log(result.data);
              console.log(result.data[0]);
            })
            .catch((error) => {
              console.log("요청실패");
              console.log(error);
            });
        }}
      >
        클릭
      </button>
      <button
        onClick={() => {
          axios({
            method: "get",
            url: "https://codingapple1.github.io/shop/data2.json",
          })
            .then((result) => {
              console.log("요청성공");
              console.log(result);
              console.log(result.data);
              console.log(result.data[0]);
            })
            .catch((error) => {
              console.log("요청실패");
              console.log(error);
            });
        }}
      >
        클릭2
      </button>
      <button
        onClick={() => {
          axios({
            method: "post",
            url: "http://j6c104.p.ssafy.io:8080/v1/ramen/category",
            data: {
              noodleType: 1,
              ramenStyle: 1,
              ramenType: 1,
            },
          })
            .then((result) => {
              console.log("요청성공");
              console.log(result);
            })
            .catch((error) => {
              console.log("요청실패");
              console.log(error);
            });
        }}
      >
        클릭3
      </button>
      {like ? <p>좋아요버튼안보이지롱~!~!</p> : <p>좋아요버튼보이지롱!!!</p>}
      {/* <p>{data[0].title}</p> */}
      {/* 예제코드 */}
      {/* axios.post( 'url', 
  { 
   contact: 'Sewon', 
   email: 'sewon@gmail.com' 
   }, 
  { 
   headers:{ 
    'Content-type': 'application/json', 
    'Accept': 'application/json' 
      } 
    } 
) 
  .then((response) => { console.log(response.data); }) 
  .catch((response) => { console.log('Error!) }); */}
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
      {/* <Link href={`/ramen/${Object.keys(obtest)[1]}`}>
        {Object.values(obtest)[1]}
      </Link>
      {Object.keys(obtest)}
      {Object.keys(obtest)[0]}
      {Object.keys(obtest)[1]}
      {Object.keys(obtest)[2]}
      {Object.values(obtest)}
      ----------------------------------------
      {Object.values(obtest)[0]}
      {Object.values(obtest)[0]}
      {Object.values(obtest)[0]} */}
      {/* {obtest} */}
      {/* {obtest["94"]}
      {obtest["201"]}
      {obtest["73"]} */}
    </>
  );
};

export default Test;
