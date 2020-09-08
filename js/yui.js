
layui.use('form', function(){
  var form = layui.form;
  form.render(null, 'select'); //更新 lay-filter="select" 所在容器内的全部表单状态
  
  //监听提交
  form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
  form.on('select()', function(data){
  console.log(data.elem); //得到select原始DOM对象
  console.log(data.value); //得到被选中的值
  console.log(data.othis); //得到美化后的DOM对象
});      
      
});