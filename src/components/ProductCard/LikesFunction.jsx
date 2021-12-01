export function checkProductInLike(id){
    let like = JSON.parse(localStorage.getItem('like'))
    if(!like){
       like = {
           products: []
       }
    }
    let newCart = like.products.filter(elem => elem.item.id ===id)
    return newCart.length > 0 ? true : false
}