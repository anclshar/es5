const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

const app = new Vue({
    el:'#app',
    data: {
        catalogUrl:'/catalodData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        searchLine: 'Искать товар',
        isVisibleCart: false,
        quantity: 1
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        },
        addProduct(product){
            console.log(product.id_product)
        },
        filterProducts(product.title){
            if(product.title){
                return product.title
            } else {
                return 'Такого товара нет'
            }
}
    },
    mounted(){
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el)
                }
            })
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el)
                }
            })
    }

})
