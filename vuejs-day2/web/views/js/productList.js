window.onload = function (){
     const vm = new Vue({
        el: '#app',
        data: {
            name: '',
            price: '',
            list:[]
        },
        methods: {
            async productList() {
                const data = await this.$http.get('http://127.0.0.1:3000/api/getproduct')
                this.list = data.data
            },
            async addProduct() {
                 
                const data = await this.$http.post('http://127.0.0.1:3000/api/addproduct',{name:this.name,price:this.price},{emulateJSON:true})
                console.log(data)
                if(data.data.affectedRows == 1) {
                    console.log(123)
                    this.productList()
                }
            },
            async delProduct(id) {
               const data = await this.$http.get('http://127.0.0.1:3000/api/delproduct?id='+id)
              
               if(data.data.affectedRows == 1) {
                this.productList()
            }

           }
        },
        created() {
            this.productList()
        }
    })
}
   
