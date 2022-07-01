import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../actions/orders";
import Header from "../pagesComponents/header/Header";
import "./mainPage.css"
import OrderCards from "../pagesComponents/orderCards/OrderCards";

const MainPage = (props) => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.ordersReducer.ordersData)

    useEffect(() => {
        dispatch(getOrders())
    }, [])
    
    return (
        <div>
            <Header/>
            <div className="mainPageContent">
                {orders.map(order => <OrderCards key={order.Id} order={order}/>)}
            </div>
        </div>
    );
};

export default MainPage;