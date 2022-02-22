import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {getAllTickets,getViewerDetail} from '../../redux/actions/index.js';
import { useDispatch,useSelector } from 'react-redux';

const Ticket = () => {
    const {id, idShow} = useParams();
    const dispatch = useDispatch();
    const ticket = useSelector((state) => state.tickets);
    const viewer = useSelector((state) => state.viewerDetail)
    const idV = Buffer.from()
    

    useEffect(()=>{
        dispatch(getAllTickets())
    },[])

    useEffect(()=>{
        
            //dispatch(getViewerDetail(decodN))
        
    },[dispatch])

    console.log('viewer',viewer)
    //console.log('decodN',decodN)

    

    return(
        <div>

        </div>
    )
}

export default Ticket;