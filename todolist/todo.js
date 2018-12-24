let vm=new Vue({
    el:"#app",
    watch:{
        todos:{
            handler(){
                localStorage
                .setItem("todosData",JSON.stringify(this.todos));

            },
            deep:true
        }
    },
    data:{
        todos:[
            {
                isSelected:false,
                title:"睡觉"
            },
            {
                isSelected:false,
                title:"吃饭"
            }
        ],
        title:"",
        cur:"",
        hash:""
    },
    computed:{
        count(){
            return this.todos.filter(item=>!item.isSelected).length;
        },
        filterTodos(){
            if(this.hash=="#/all")return this.todos;
            if(this.hash=="#/unfinish")return this.todos.filter(item=>!item.isSelected);
            if(this.hash=="#/finish")return this.todos.filter(item=>item.isSelected);
            return this.todos;
        }
    },
    methods:{
        add(){
            this.todos.push(
                {
                    isSelected:false,
                    title:this.title
                }
            );
            this.title="";
        },
        remove(todo){
            this.todos=this.todos.filter(item=>item!=todo);
        },
        remember(todo){
            this.cur=todo;
        },
        cancel(){
            this.cur="";
            //自动获取光标的问题
        }
    },
    directives:{
        /*当todo与cur相等时，则获取焦点 */
        focus(el,bingding){
            if(bingding){
                el.focus();
            }
        }
    },
    created(){
        this.todos=JSON.parse(localStorage.getItem("todosData")) || this.todos;

        //监控hash的变化,这里要用箭头函数。网页地址默认就带有hash值时则是直接获取hash。
        this.hash=window.location.hash || "#/all";
        window.addEventListener("hashchange",()=>{
            this.hash=window.location.hash;
        },false);
    }

});

/*
实现的功能：
1，把数据显示在页面(添加数据)
2，按回车新添加数据（同时手动增加iselected）
3,删除功能
4,显示未完成的数量
*/