
// import React, { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Homepage from '../pages/HomePage'
// import Loading from "./loading";
// const Home = () => {
//   const [card, setCard] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);

//   const getCardData = async () => {
//     const res = await fetch(
//       `http://localhost:4000/api/v1/news?_limit=15&_page=${page}`
//     );
//     const data = await res.json();
//     // console.log(data);
//     setCard((prev) => [...prev, ...data]);
//     setLoading(false);
//   };

//   useEffect(() => {
//     getCardData();
//   }, [page]);

//   const handelInfiniteScroll = async () => {
//     try {
//       if (
//         window.innerHeight + document.documentElement.scrollTop + 1 >=
//         document.documentElement.scrollHeight
//       ) {
//         setLoading(true);
//         setPage((prev) => prev + 1);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handelInfiniteScroll);
//     return () => window.removeEventListener("scroll", handelInfiniteScroll);
//   }, []);

//   return (
//     <>
//       <Homepage movieInfo={card} />
//       {loading && <Loading />}
//     </>
//   );
// };

// export default infiniteScroll;
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Scroll() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMoreData = () => {
    // fetch more data here, e.g. using an API call
    fetch(`http://localhost:4000/api/v1/news?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setItems((prevItems) => [...prevItems, ...data.items]);
        setPage((prevPage) => prevPage + 1);
        setHasMore(data.hasMore);
      })
      .catch((err) => {
        console.error(err);
        setHasMore(false);
      });
  };

  useEffect(() => {
    fetchMoreData();
  }, []);


  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more items to load.</p>}
      >
        {items.map((item) => (
          <div key={item.id}>
            <p>{item?.Headline}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Scroll;

