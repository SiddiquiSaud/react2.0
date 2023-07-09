import React, { useState, useEffect } from 'react'
import Content from "./Content"
//import Shimmer from './Shimmer';
import Skeleton from './Skeleton';
const Home = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(10);
  const [query,setQuery] = useState("");
  const [filtered,setFiltered] = useState([]);
  console.log(items)
  // const [filtered,setFiltered] = useState([]);
  // const [query,setQuery] = useState("");
 
  var isLoading = false;
  const getCardData = async () => {
    debugger;
    const res = await fetch(`https://randomuser.me/api/?results=${page}&inc=name,picture,id,cell&nat=in`);
    const data = await res.json();
    const data1 = data.results;
    setItems((prev) => [...prev, ...data1]);
    console.log(items)
    setFiltered(items)
  }
  const handleScroll = async () => {
    try {
      debugger;
      console.log(window.innerHeight);
      console.log(document.documentElement.scrollHeight);
      console.log(document.documentElement.scrollTop);
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        setPage((prev) => prev + 10)
        isLoading = true;
        
      }
     
    
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCardData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [page]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, []);

  
  return (items.length > 0) ? (
    <div className='home2'>
      <input   type="text" value={query} onChange={(e) => setQuery(e.target.value) } />
      {items.length > 0 &&
        items.filter((item) => (
          item.name.first.toLowerCase().includes(query) ||  item.cell.toLowerCase().includes(query)
        )).map((item) => (
          <Content item={item} />
        ))
      }
    </div>
  ) : (<Skeleton />)
}

export default Home
