#todolist项目#

##功能介绍##

> 在输入框中输入需要完成提醒，按回车实现
> 每个提醒都是可以删除和修改的
> 把提醒分类成是否是完成的提醒
> 提醒的历史记录需保存在本地

##技术实现##


背景技术，vue实现

>输入框中输入值后，使用vue中的键盘事件中的回车事件，更改计算属性总数据，再渲染计算属性。
>删除提醒的实现，是把渲染的对象传入到方法里，再循计算属性总数据，相等的那个对象就删除掉。修改的实现：
双击则显示输入框，光标消失后显示复选框，即是一个“一激活”（个人方法总结有记录）的方法实现。这里需要注意的是：双击之后需要自动获取焦点，用自定义指令实现。
>提醒事件是否完成，主要是利用网页hash值以及window的监听hash值的事件hashchange,然后通过获取网页hash值的不同返回给计算属性的总数据不同，则页面的显示效果也不同。
>历史事件保存在本地是，把计算属性的总数居保存在了localstorage中。


