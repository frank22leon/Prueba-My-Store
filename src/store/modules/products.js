export const productsModule = {
  namespaced: true,
  state: {
    listOfProducts: [
      {
        name: "Cocosette",
        category: "Dulce",
        offer: false,
        discount: 0,
        price: 500,
        stock: 10,
        image:
          "https://s.cornershopapp.com/product-images/3418989.jpg?versionId=jq9akMQ_xmSHyxo8HmNBaROfHVhEz9Ec",
      },
      {
        name: "Pepito",
        category: "Salado",
        offer: false,
        discount: 0,
        price: 1600,
        stock: 10,
        image:
          "https://conceptof1.net/wp-content/uploads/2020/09/PEPITO-EL-ORIGINAL-80-GR-510x510.jpg",
      },
      {
        name: "Savoy",
        category: "Dulce",
        offer: false,
        discount: 0,
        price: 400,
        stock: 10,
        image:
          "https://s.cornershopapp.com/product-images/2006536.jpg?versionId=TjS50K.WjAxUW3NLM09f4rnVpVmGBNzT",
      },
      {
        name: "Platanitos",
        category: "Salado",
        offer: false,
        discount: 0,
        price: 800,
        stock: 10,
        image:
          "https://www.merca.co/arquivos/ids/200488-1000-1000/Natuchips-FRITOLAY-verde-x135-g_36404.jpg?v=637400460140100000",
      },
      {
        name: "Samba",
        category: "Dulce",
        offer: true,
        discount: 20,
        price: 700,
        stock: 10,
        image:
          "https://cdn.shopify.com/s/files/1/0550/3418/3840/products/samba-01_2000x_19ad237b-216f-4b75-84c5-d2db44a92b6e_1024x1024@2x.jpg?v=1614921862",
      },
      {
        name: "Pirulin",
        category: "Dulce",
        offer: true,
        discount: 10,
        price: 900,
        stock: 10,
        image:
          "https://s.cornershopapp.com/product-images/1132072.jpg?versionId=z8Btegum2B1P82irE_qCCTDZXoc2M_7d",
      },
    ],
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.listOfProducts.push(newProduct);
    },
  },
  actions: {
    addProduct(context, product) {
      context.commit("ADD_PRODUCT", product);
    },
  },
};
