import React, { useEffect, useState } from "react";
import { allShows } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Shows from "../Shows/Shows.js";
import NavBarViewer from "../NavBar/NavBarViewer.js";
import SearchBar from "../SearchBar/SearchBar.js";
import Paginate from "../Paginate/Paginate.js";
import style from "./HomeViewer.module.css";
import Footer from "../Footer/Footer.js";

const HomeViewer = () => {
  const dispatch = useDispatch();
//   const show = useSelector((state) => state.shows);
const allshows = useSelector((state) => state.shows);
const [order, setOrder] = useState("");
const [actualPage, setActualPage] = useState(1);
const [qty] = useState(6);
const iLastShow = actualPage * qty; //6
const iFirstShow = iLastShow - qty;
const actualShow = allshows.slice(iFirstShow, iLastShow);
const paginate = (number) => {
    setActualPage(number);
};
  useEffect(() => {
    dispatch(allShows());
  }, [dispatch]);

  return (
//     <div className={style.homeContainer}>
//       <NavBarViewer />
//       <div className={style.showsContainer}>
//         <Shows />
//       </div>
//     </div>
//   );
// };
  <div className={style.homeContainer}>
    <div className={style.navContainer}>
     <h3>Usuario</h3>
      <NavBarViewer setActualPage={setActualPage} setOrder={setOrder} />
    </div>
    <div className={style.searchContainer}>
      <SearchBar />
    </div>
{/* <Link to ='/'>
          </Link> */}

    <div className={style.showsContainer}>
      {actualShow.length ? (
        <Shows actualShow={actualShow}/>
      ) : (
        <p>...</p>
      )}
    </div>
    <div className={style.paginate}>
      <Paginate qty={qty} allshows={allshows.length} paginate={paginate} />
    </div> 
    <Footer/>
  </div>
)
}

export default HomeViewer;
