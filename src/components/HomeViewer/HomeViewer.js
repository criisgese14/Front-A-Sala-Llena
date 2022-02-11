import React, { useEffect, useState } from "react";
import { allShows } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Shows from "../Shows/Shows.js";
import NavBarViewer from "../NavBar/NavBarViewer.js";
import SearchBar from "../SearchBar/SearchBar.js";
import Paginate from "../Paginate/Paginate.js";
import style from "./HomeViewer.module.css";
import CarouselContainer from "../Carrousel/Carrousel.js"
import { useParams } from "react-router-dom";
import { getViewerDetail} from "../../redux/actions/index.js"
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
const detail = useSelector((state)=> state.viewerDetail)
const {id}= useParams();
const paginate = (number) => {
    setActualPage(number);
};
  useEffect(() => {
    dispatch(getViewerDetail(id))
    dispatch(allShows());
  }, [dispatch]);

  const shows = allshows?.filter((e)=> e.theater.province === detail.province)  
  console.log(shows)

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
      
      {shows.length > 0 ? <CarouselContainer allshows={shows}/>:<CarouselContainer allshows={allshows}/> }
    
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
    <footer class={style.footer}>
              <a href="/">Términos y condiciones</a>
              <a href="/">Politica de privacidad</a>
              <a href="/">Contacto</a>
              <a href="/">Aviso legal</a>
              <a href="/">Centro de ayuda</a>
      </footer> 
    </div>
    )
}

export default HomeViewer;
