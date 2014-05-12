$('#infiniteListView .inline-file-col a.file-handler').each(function(){
  $(this).click();
  alert($(this).text());
});

$('#infiniteListView .down-sfile').each(function(){
  alert($(this).click());
  alert($(this).attr('title'));
})
