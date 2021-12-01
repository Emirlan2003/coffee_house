import React, { createContext, useContext, useReducer, useState } from 'react';
import { calcSubPrice, calcTotalPrice, getCountProductsInCart } from '../components/Basket/BasketFunction'
import axios from 'axios'



export const productContext = createContext()


const INIT_STATE = {
    products: [],
    currentProduct: {},
    productsToEdit: null,
    chosen: [],
    comments: [],
    cartLength: getCountProductsInCart(),
    cart: {},
    like: {},
    history: [],
    rating: []
}



const reducer = ( state = INIT_STATE, action ) => {
    switch(action.type) {
        case "GET_DATA":
            return { ...state, products: action.payload}
        case "GET_DETAILS":
            return { ...state, currentProduct: action.payload}
        case "EDIT_PRODUCTS":
            return { ...state, productsToEdit: action.payload}
        case "GET_CHOSEN":
            return { ...state, chosen: action.payload}
        case "GET_COMMENTS":
            return { ...state, comments: action.payload}
        case "CHANGE_CART_COUNT":
            return { ...state, cartLength: action.payload}
        case "GET_CART":
            return { ...state, cart: action.payload}
        case "GET_LIKE":
            return { ...state, like: action.payload}
        case "GET_HISTORY":
            return { ...state, history: action.payload}
        case "GET_RATING":
            return { ...state, rating: action.payload}
        default: 
                 return state
    }
}




const ProductContextProvider = ({ children }) => {

 const [ state, dispatch ] = useReducer(reducer, INIT_STATE)
 

 const getData = async (params) => {
     const { data } = await axios(`http://localhost:8001/topics?${params}`)
     dispatch({
         type: "GET_DATA",
         payload: data
     })
 }

 const getTopic = async (topic) => {
     await axios.post('http://localhost:8001/topics', topic)
     getData()
 }


 const getDetails =  async (id) => {
     const { data } = await axios(`http://localhost:8001/topics/${id}`)
     dispatch({
         type: "GET_DETAILS",
         payload: data
     })
 }

 const deleteTopic = async (id) => {
     await axios.delete(`http://localhost:8001/topics/${id}`)
     getData()
 }


 const editTopic = async (id) => {
     const { data } = await axios(`http://localhost:8001/topics/${id}`)
     dispatch({
         type: "EDIT_PRODUCTS",
         payload: data
     })
 }


 const saveTopic = async (newTopic) => {
    axios.patch(`http://localhost:8001/topics/${newTopic.id}`, newTopic)
 }



 const getDataChosen = async () => {
     const { data } = await axios('http://localhost:8001/chosen')
     dispatch({
         type: "GET_CHOSEN",
         payload: data
     })
 }

 const getChosen = async (topic) => {
     await axios.post('http://localhost:8001/chosen', topic)
     getDataChosen()
 }


 const deleteChosen =  async (id) => {
     await axios.delete(`http://localhost:8001/chosen/${id}`)
     getDataChosen()
 }
 

 const getComments = async () => {
     const { data } = await axios('http://localhost:8001/comments')
     dispatch({
         type: "GET_COMMENTS",
         payload: data
     })
 }

 const addComments = async (topic) => {
     await axios.post('http://localhost:8001/comments', topic)
     getComments()
 }



const getHistory = async () => {
    const { data } = await axios('http://localhost:8001/order')
    dispatch({
        type: "GET_HISTORY",
        payload: data
    })
}


const addHistory = async (topic) => {
    await axios.post('http://localhost:8001/order', topic)
    getHistory()
}



function addProductToCart(product){
     let cart = JSON.parse(localStorage.getItem('cart'))
     if(!cart){
         cart = {
             products: [],
             totalPrice: 0
         }
     }
     let newProduct = {
         item: product,
         count: 1,
         subPrice: 0
     }
     let filteredCart = cart.products.filter(elem => elem.item.id === product.id)
     if(filteredCart.length > 0){
         cart.products = cart.products.filter(elem => elem.item.id !== product.id)
     }else{
         cart.products.push(newProduct)
     }
     newProduct.subPrice = calcSubPrice(newProduct)
     cart.totalPrice = calcTotalPrice(cart.products)


     localStorage.setItem('cart', JSON.stringify(cart))
     dispatch({
         type: "CHANGE_CART_COUNT",
         payload: cart.products.length
     })

}



function getCart(){
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(!cart){
        cart = {
            products: [],
            totalPrice: 0
        }
    }
    dispatch({
        type: "GET_CART",
        payload: cart
    })
}


function changeProductCount(count, id){
     let cart = JSON.parse(localStorage.getItem('cart'))
     cart.products = cart.products.map(elem => {
         if(elem.item.id === id){
             elem.count = count
             elem.subPrice = calcSubPrice(elem)
         }
         return elem
     })
     cart.totalPrice = calcTotalPrice(cart.products)
     localStorage.setItem('cart', JSON.stringify(cart))
     getCart()
}




function addProductToLike(product){
    let like = JSON.parse(localStorage.getItem('like'))
    if(!like){
        like = {
            products: [],
        }
    }
    let newProduct = {
        item: product
    }
    let filteredCart = like.products.filter(elem => elem.item.id === product.id)
    if(filteredCart.length > 0){
        like.products = like.products.filter(elem => elem.item.id !== product.id)
    }else{
        like.products.push(newProduct)
    }

    localStorage.setItem('like', JSON.stringify(like))
}


function getLike(){
    let like = JSON.parse(localStorage.getItem('like'))
    if(!like){
        like = {
            products: []
        }
    }
    dispatch({
        type: "GET_LIKE",
        payload: like
    })
}

 

const getRating = async() => {
    const { data } = await axios('http://localhost:8001/rating')
    dispatch({
        type: "GET_RATING",
        payload: data
    })
}

const addRating = async(topic) => {
    await axios.post('http://localhost:8001/rating', topic)
    getRating()
}
 

    return (
        <productContext.Provider value={{
             products: state.products,
             currentProduct: state.currentProduct,
             productsToEdit: state.productsToEdit,
             chosen: state.chosen,
             comments: state.comments,
             cartLength: state.cartLength,
             cart: state.cart,
             like: state.like,
             history: state.history,
             rating: state.rating,
             getRating,
             addRating,
             getHistory,
             addHistory,
             addProductToLike,
             getLike,
             getCart,
             changeProductCount,
             addProductToCart,
             addComments,
             getComments,
             getChosen,
             getTopic,
             getDetails,
             deleteTopic,
             editTopic,
             saveTopic,
             getData,
             deleteChosen,
             getDataChosen,
             dispatch
        }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;