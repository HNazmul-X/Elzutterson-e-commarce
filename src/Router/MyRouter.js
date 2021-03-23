import React from 'react';
import { Route, Switch} from "react-router-dom"
import { MyCarousel } from '../Components/Carousel/MyCarousel';
import AllProducts from '../Pages/AllProducts/AllProducts';
import CartPage from '../Pages/Cart/CartPage/CartPage';
import Catagories from '../Pages/Catagories/Catagories';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Home from '../Pages/Home/Home';
import Confirm from '../Pages/Login/Confirm/Confirm';
import LoginFrom from '../Pages/Login/LoginForm/LoginFrom';
import SignUpForm from '../Pages/Login/SignUpForm/SignUpForm';
import ProductView from '../Pages/ProductView/ProductView';
import MyList from '../Pages/Profile/MyList';
import ProfileEdit from '../Pages/Profile/ProfileEdit';
import ProfilePage from '../Pages/Profile/ProfilePage';
import SellerView from "../Pages/sellerView/SellerView"


const MyRouter = () => {




    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/register"> <SignUpForm /></Route>
                <Route exact path="/login"> <LoginFrom /> </Route>
                <Route exact path="/:schoolId/cart"> <CartPage /> </Route>
                <Route exact path="/confirm"><Confirm />  </Route>
                <Route exact path="/all-catagory"> <Catagories /></Route>
                <Route exact path="/:schoolId/all-products"><AllProducts /></Route>
                <Route exact path="/:schoolId/seller-view"><SellerView /></Route>
                <Route exact path="/:schoolId/product-view"> <ProductView />  </Route>
                <Route exact path="/:schoolId/profile"><ProfilePage />  </Route>
                <Route exact path="/:schoolId/profile/edit"> <ProfileEdit /> </Route>
                <Route exact path="/:schoolId/profile/my-list"> <MyList /> </Route>
                <Route exact path="/contact-us" component={ContactUs}/>
                <Route exact path="/carousel" component={MyCarousel}/>
            </Switch>
        </>
    );
};

export default MyRouter;