$(function (){

  if (localStorage.getItem('goods')) {
    // 获取购物车数据
    var goodsArr = JSON.parse( localStorage.getItem('goods') )
    // 获取所有数据
    $.ajax({
      url: './data/goods.json',
      type: 'get',
      dataType: 'json',
      success: function (json){
        var domStr = ''
        $.each(json,function (index,item){
          $.each(goodsArr,function (i,obj){
            if (item.id === obj.id) {
              var count = item.price * obj.num
              domStr += `
              <li>
                <input type="checkbox" data-id="${item.id}">
                <img src="${item.imgurl}" alt="">
                <h3>${item.title}</h3>
                <p id='price'>${count}</p>
                <span>
                    <i class="even" data-id="${item.id}"> - </i>
                    <i id='conn'>${obj.num}</i>
                    <i id="add" data-id="${item.id}"> + </i>
                </span>
                <em data-id="${item.id}">删除</em>
              </li>
              `
            }
          })
        })
        $('.list').html(domStr)
      }
    })

    // 删除商品
    $('.list').on('click','li em',function (){
      // 当前点击的商品id
      var id = $(this).attr('data-id')
      $.each(goodsArr,function (index,item){
        if (item.id === id) {
          goodsArr.splice(index,1)
          return false
        }
      })
      // 删除dom结构
      $(this).parent().remove()
      // 更新本地存储的数据
      localStorage.setItem('goods',JSON.stringify(goodsArr))
      if (goodsArr.length <= 0) {
        localStorage.removeItem('goods')
        var newLi = '<li>购物车暂无数据！</li>'
        $('.list').html(newLi)
      }
    })

    //添加购物车商品数量改变价格
   $('.list').on('click','#add',function(){
    var count = 0
    var id = $(this).attr('data-id')
    _this = $(this)
    $.each(goodsArr,function(index,item){
      if(item.id === id){
        count = item.num + 1
        _this.siblings('#conn').html(count)

        var oldp = parseInt(_this.parent().siblings('#price').html())/(count -1)
        var newp =oldp *  count
        _this.parent().siblings('#price').html(newp)

        goodsArr[index].num=count
        goodsArr[index].price=newp
        localStorage.setItem('goods', JSON.stringify(goodsArr))
      }
    })
  })

  var sum = 0
  //勾线计算价格
  $('.list').on('click','li input',function(){
    // var id = $(this).attr('data-id')
      if( $(this).prop('checked')){
        var countp = $(this).siblings('#price').html()
        sum = sum + parseInt(countp) 
        $('.count .countprice b').html(sum)
      }else{
        var countp = $(this).siblings('#price').html()
        sum = sum - parseInt(countp) 
        $('.count .countprice b').html(sum)
      }
      _this = $(this) 
      
      $.each(goodsArr,function(index,item){
        console.log(!$($('.list li input')[1]).prop('checked'));

        if(!$($('.list li input')[index]).attr('checked')){
          $('.head span input').attr('checked',false)
          return false
        }else{
          $('.head span input').attr('checked',true)
        }

      })
  })


  
  //全选计算价格
  $('.head').on('click','span input',function(){
    console.log($(this));
    if($(this).attr('checked')){
      $.each($('.list li input'),function(index,item){
        $($('.list li input')[index]).attr('checked',true)
      })
      
    }else{
      $.each($('.list li input'),function(index,item){
        $($('.list li input')[index]).attr('checked',false)
      })
    }

  })



  } else {
    var newLi = '<li>购物车暂无数据！</li>'
    $('.list').html(newLi)
  }

  

})