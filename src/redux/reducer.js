import * as actionsType from './actions';
import * as images from '../images/ImagesProducts';
import * as categoryImg from '../images/ImagesCategory';

const initialState = {
    beverages: [
        { name: "cola",   img: categoryImg.beverages,  price: 1.25, count: 0},
        { name: "fanta",  img: images.Bvg.fanta, price: 1.25, count: 0},
        { name: "mocha",  img: images.Bvg.mocha, price: 1.40, count: 0}
    ],
    burgers: [
        { name: "hamburger", img: images.Brg.hamburger, price: 1.80, count: 0},
        { name: "cheeseburger", img: images.Brg.cheeseburger, price: 1.90, count: 0},
        { name: "double cheese", img: images.Brg.doublecheese, price: 2.10, count: 0}
    ],
    desserts: [
        { name: "body dessert", img: images.Dst.body, price: 1.40, count: 0},
        { name: "french dessert", img: categoryImg.desserts, price: 1.30, count: 0},
        { name: "ice cream", img: images.Dst.iceCream, price: 1.30, count: 0}
    ],
    sushi: [
        { name: "japanese", img: images.Shi.japanese, price: 3.60, count: 0},
        { name: "sushi with salmon", img: images.Shi.salmon, price: 2.25, count: 0},
        { name: "sushi", img: categoryImg.sushi, price: 4.99, count: 0}
    ],
    salads: [
        { name: "fresh salad", img: categoryImg.salads, price: 2.50, count: 0},
        { name: "greek salad", img: images.Sld.greek, price: 3.60, count: 0},
        { name: "salad with turkey", img: images.Sld.turkey, price: 3.00, count: 0}
    ],
    pizza: [
        { name: "pancetta", img: images.Pzz.pancetta, price: 6.00, count: 0},
        { name: "capricciosa", img: images.Pzz.pizza, price: 7.50, count: 0},
        { name: "pepperoni", img: categoryImg.pizza, price: 5.90, count: 0}
    ],
    wines: [
        { name: "temple bruer", img: images.Wns.bruer, price: 15.30, count: 0},
        { name: "tiefenbrunner", img: images.Wns.pinot, price: 13.99, count: 0},
        { name: "beringer", img: images.Wns.beringer, price: 17.00, count: 0}
    ],
    orders: [],
    totalPrice: 0.00
}

const reducer = (state = initialState, action) => {
    if (action.type === actionsType.ADD_TO_COUNT) {
        const product = state[action.category].slice();
        product.map((item) => {
            if (item.name === action.name) {
                item.count = item.count + 1;
            }
            return item;
        });
        return { 
            ...state, 
            [action.category]: product 
        }
    }
    // NEXT CASE ====================================================
    if (action.type === actionsType.REMOVE_TO_COUNT) {
        const product = state[action.category].slice();
        product.map((item) => {
            if (item.name === action.name && item.count > 0) {
                item.count = item.count - 1;
            }
            return item;
        });
        return { 
            ...state, 
            [action.category]: product 
        }
    }
    // NEXT CASE ====================================================
    if (action.type === actionsType.ADD_TO_PRICE && action.cost ) {
        const oldOrders = state.orders.slice();
        const name = action.productObj.name;
        let isNewProduct = true;

        oldOrders.forEach(item => {
            if (item.name === name) {
                item.count += action.productObj.count;
                isNewProduct = false;
            }
        });
        if (isNewProduct) oldOrders.push(action.productObj);
        
        const product = state[action.category].slice();
        product.map((item) => {
            if (item.name === action.productName) {
                item.count = 0;
            }
            return item;
        });

        return { 
            ...state, 
            totalPrice: state.totalPrice + action.cost,
            orders: oldOrders,
            [action.category]: product
        }
    }
    // NEXT CASE ====================================================
    if (action.type === actionsType.DELETE_ORDER) {
        const oldOrders = state.orders.slice();
        const index = state.orders.indexOf(action.item);
        oldOrders.splice(index, 1);
        return {
            ...state,
            orders: oldOrders,
            totalPrice: state.totalPrice - (action.item.price * action.item.count)
        };
    }
    // NEXT CASE ====================================================
    if (action.type === actionsType.SUBMIT_ORDER) return { ...state, orders: [], totalPrice: 0.00 }
    // NEXT CASE ====================================================
    if (action.type === actionsType.REMOVE_TO_PRICE) return { ...state, totalPrice: state.totalPrice - action.cost }
    return state;
}

export default reducer;