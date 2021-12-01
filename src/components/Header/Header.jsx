import React, { useContext } from 'react';
import logo from '../../assets/images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from "@mui/material/Badge";
import IconButton from '@mui/material/IconButton';
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from "@mui/material";
import { productContext } from '../../context/ProductContext';



const Header = () => {
    const { cartLength } = useContext(productContext)


    const {
        handleLogout,
        user: { email },
      } = useAuth();



    return (
        <>
        <div className="header">
              <div className="headerBlock">
                  <div className="headerLeft">
                     <Link to="/">
                           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TVcwqctRALjbe2s_qnSFBgB_hxVRLohpE1_hkuPIkAQgLbNWUj8hzscJ9nJtG0NPJC8&usqp=CAU' alt="" className="mainIcons" />
                     </Link>
                  </div>
                     <div className="headerCenter">
                        <Link to="/">
                              <div>Home</div>
                        </Link>
                        <a href="#about">About</a>
                        <Link to="/menu">
                             <div className="chosen">Menu</div>
                        </Link>
                             <a href="#products">Products</a>
                        <Link to="/sub">
                             <div className="chosen">Subscribe</div>
                        </Link>
                        <Link to="/history">
                             <div className="chosen">History</div>
                        </Link>
                        <Link to="/chosen">
                             <div className="chosen">Chosen</div>
                        </Link>
                     </div>
                  <div className="headerRight">
                      <Link to="/basket">
                            <IconButton>
                              <Badge badgeContent={cartLength} color="error">
                                   <AddShoppingCartIcon style={{color: 'white'}} fontSize='large' className="basket"/>
                               </Badge>
                            </IconButton>
                      </Link>

                      {email ? (
                            <Link to="/auth">
                                <Button
                                    className="btn_logout"
                                    variant="contained"
                                    disableElevation
                                    onClick={handleLogout}
                                    >
                                Logout
                               </Button>
                            </Link>
                                    ) : null}

                            {email ? null : (
                              <Link to="/auth">
                                <Button className="btn_login" variant="contained" disableElevation>
                                  Login
                                </Button>
                              </Link>
                            )}
              
                  </div>
                            <div class="hamburger-menu">
                              <input id="menu__toggle" type="checkbox" />
                                 <label class="menu__btn" for="menu__toggle">
                                    <span></span>
                                       </label>
                                            <ul class="menu__box">
                                              <li><a class="menu__item" href="#">About</a></li>
                                              <li><a class="menu__item" href="#">Menu</a></li>
                                              <li><a class="menu__item" href="#">Products</a></li>
                                              <li><a class="menu__item" href="#">Review</a></li>
                                              <li><a class="menu__item" href="#">Chosen</a></li>
                                              <li><a class="menu__item" href="#">Basket</a></li>
                                              <li><a class="menu__item" href="#">Login</a></li>
                                            </ul>
                            </div>
              </div>
           <div className="line"></div>
        </div>
        </>
    );
};

export default Header;