
const app = new Vue({
    el: '#app',
    data: {
         items : [
            {
                url:'img/01.jpg',
                name:'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url:'img/02.jpg',
                name:'Svizzera',
                text:'Lorem ipsum'
            },
            {
                url:'img/03.jpg',
                name:'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                url:'img/04.jpg',
                name:'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                url:'img/05.jpg',
                name:'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ],

        active : 0,
        
    },
    mounted:function(){
        this.autoPlay() 
        },
    methods: {
        previous(){
            if(this.active == 0){
                this.active =  this.items.length - 1;
            }else{
                this.active--
            }
        },
        next(){
            if(this.active == this.items.length - 1){
                this.active = 0;
            }else{
                this.active++
            }
        },
        makeActive(indice)
        { this.active = indice;
            
        },
        autoPlay(){
            prova =  setInterval(moveSlide,3000);

            function moveSlide(){
                if(app.active == app.items.length - 1){
                    app.active = 0;
                }else{
                    app.active++
                }
                }
        },
        stopAutoPlay(){
            clearInterval(prova);
        }
    }

  })


