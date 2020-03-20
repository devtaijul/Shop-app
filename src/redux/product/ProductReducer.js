import { ADD_TO_CART } from "./ProductTypes";

const initialState = {
  ProductList: [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Sphynx Tie Dye Grey T-Shirt",
      description: "This is a demo description",
      availableSizes: ["X", "L", "XL", "XXL"],
      price: 10,
      isFreeShipping: true
    },

    {
      id: 2,
      image:
        "https://images.pexels.com/photos/991511/pexels-photo-991511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Danger Knife Grey T-Shirt",
      description: "Danger Knife Grey",
      availableSizes: ["X", "M", "L"],
      price: 14.9,
      isFreeShipping: true
    },

    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "White DGK Script Tee",
      description: "White DGK Script",
      availableSizes: ["X", "M", "L"],
      price: 14.9,
      isFreeShipping: true
    },

    {
      id: 4,
      image:
        "https://images.pexels.com/photos/1861907/pexels-photo-1861907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Born On The Streets  T-Shirt",
      description: "Born On The Streets",
      availableSizes: ["XL"],
      price: 25.9,
      isFreeShipping: false
    },

    {
      id: 5,
      image:
        "https://images.pexels.com/photos/911605/pexels-photo-911605.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      title: "Tso 3D Short Sleeve T-Shirt A",
      description: "Tso 3D Short Sleeve",
      availableSizes: ["X", "L", "XL"],
      price: 10.9,
      isFreeShipping: false
    },

    {
      id: 6,
      image:
        "https://images.pexels.com/photos/2301250/pexels-photo-2301250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Man Tie Dye Cinza Grey T-Shirt",
      description: "Man Tie Dye Cinza Grey",
      availableSizes: ["XL", "XXL"],
      price: 49.9,
      isFreeShipping: false
    },

    {
      id: 7,
      image:
        "https://images.pexels.com/photos/2480369/pexels-photo-2480369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Crazy Monkey Black T-Shirt",
      description: "1977 Infantil",
      availableSizes: ["S"],
      style: "Preto com listras brancas",
      price: 22.5,
      isFreeShipping: true
    },

    {
      id: 8,
      image:
        "https://images.pexels.com/photos/2315313/pexels-photo-2315313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Tso 3D Black T-Shirt",
      description: "",
      availableSizes: ["XL"],
      style: "Azul escuro",
      price: 18.7,
      isFreeShipping: false
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/2333015/pexels-photo-2333015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Crazy Monkey Grey",
      description: "",
      availableSizes: ["L", "XL"],
      price: 134.9,
      isFreeShipping: true
    }
  ],
  addedToCart: [],

  view: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addedToCart: [...state.addedToCart, action.payload]
      };

    default:
      return state;
  }
};

export default productReducer