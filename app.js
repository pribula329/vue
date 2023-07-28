Vue.createApp({

    data() {
        return {
            shopName:[
                "Lidl",
                "Kaufland"
            ]
        };
    }
})
    .component('shop',{
        template: '#shop-template',
        props:{
            name: String
        },
        data(){
            return{
                header: "Shopping List",
                show: false,
                textShow: "Show items",
                newItem: "",
                items: [
                    {id:0, label: "10 t-shirt"},
                    {id:1, label:"5 trousers"},
                    {id:2, label:"2 cap"},
                    {id:3, label:"3 orange"},
                ]
            }
        },
        methods:{
            saveItem(){
                this.items.push({
                    id: this.items.length+1,
                    label: this.newItem
                })
                this.newItem=""
                if (this.show===false){
                    this.doShow()
                }

            },
            doShow(){
                this.show = !this.show
                if (this.textShow==="Show items"){
                    this.textShow="Hide items"
                }
                else {
                    this.textShow="Show items"
                }
            }
        },
        computed:{
            reverseItem(){
                return [...this.items].reverse()
            }
        }

    })
    .mount("#shopping-list")