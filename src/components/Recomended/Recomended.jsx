import React from 'react';
import './Recomended.css'
import rec1 from '../../assets/images/product-1.png'
import rec2 from '../../assets/images/product-2.png'
import rec3 from '../../assets/images/product-3.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Recomended = () => {
    return (
        <>
        <div className="mainRecBlock">
             <h1 className="recH1">RECOMENDED</h1><h1 className="recH2">PRODUCTS</h1> 
        </div>
        <div className="childRecBlock">
                 <div className="recBlock1">
                     <img src={rec1} alt="" className="recImg"/>
                     <div className="recIcons">
                         <AddShoppingCartIcon style={{color: 'white', border: '1px solid grey', margin: '5px'}} />
                         <FavoriteIcon style={{color: 'white', border: '1px solid grey', margin: '5px'}} />
                         <BookmarkSharpIcon style={{color: 'white', border: '1px solid grey', margin: '5px'}}/>
                     </div>
                 </div>
                 <div className="recBlock2">
                     <img src={rec2} alt="" className="recImg"/>
                     <div className="recIcons">
                         <AddShoppingCartIcon style={{color: 'white', border: '1px solid grey', margin: '5px'}}/>
                         <FavoriteIcon style={{color: 'white', border: '1px solid grey', margin: '5px'}}/>
                         <BookmarkSharpIcon style={{color: 'white', border: '1px solid grey', margin: '5px'}}/>
                     </div>
                 </div>
                 <div className="recBlock3">
                     <img src={rec3} alt="" className="recImg"/>
                     <div className="recIcons">
                         <AddShoppingCartIcon style={{color: 'white', border: '1px solid grey', margin: '5px'}}/>
                         <FavoriteIcon style={{color: 'white', border: '1px solid grey', margin: '5px'}}/>
                         <BookmarkSharpIcon style={{color: 'white', border: '1px solid grey', margin: '5px'}}/>
                     </div>
                 </div>
        </div>
        </>
    );
};

export default Recomended;