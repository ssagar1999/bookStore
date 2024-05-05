import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios";



function Courses() {
  const [book, setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res =await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      }catch(error){
        console.log(error);
      }
    }
    getBook();
  },[]);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl pt-20 mt-8 font-semibold md:text-4xl">We're delighted to have you
            <span className="text-pink-500"> Here! :)</span></h1>
          <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, autem voluptas. Amet, ab qui recusandae sapiente nisi mollitia quisquam? Officiis ab porro illum minima fugiat cumque dolore placeat nemo incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam, iure aut corrupti nulla sequi totam nemo ipsum laborum saepe odit facilis voluptas, vel, maxime pariatur alias natus deleniti fuga.</p>
          <Link to="/">
          <button className="bg-pink-500 rounded-md text-white px-4 py-2 hover:bg-pink-700 duration-300 mt-8">Back</button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            book.map((item) => (
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Courses
