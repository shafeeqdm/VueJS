const app = Vue.createApp({  
    data() { 
        return {
            showtitle : true,
            books : [
                {title:"book1" , author:"abc" , isfav:true},
                {title:"book2" , author:"efg" , isfav:false},
                {title:"book3" , author:"hij" , isfav:true}
            ]
            
            
        }
    },
    methods :{
        changeTitle(abc) {
            this.title = abc
        },
        show() {
            this.showtitle = !this.showtitle
        },
        mouse(e,data) {
            console.log(e, e.type)
            this.x = e.offsetX
            this.y = e.offsetY
            if (data){
                console.log(data)
            }
        },
        toggle(book){
            book.isfav = !book.isfav
        },
    },
    computed:{
        display(){
            return this.books.filter( (book) => book.isfav )
        }
    },
})

app.mount('#app')