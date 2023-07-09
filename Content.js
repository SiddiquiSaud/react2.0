import React from 'react'
import "./Content.css"
import InfiniteScroll from 'react-infinite-scroll-component';
import {AutoSizer,List} from "react-virtualized-auto-sizer";
const Content = ({item}) => {
    console.log(item);
  return (
    <div className='content scroll-flow'>
        <img src={item.picture.medium} alt="pic" />
        <div className='right-side'>
        <h2>{item.name.first} {item.name.last}</h2>
        <h2>{item.cell}</h2>
        </div>
    </div>
  )
}

export default Content
