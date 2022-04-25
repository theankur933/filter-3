var gallaryList=[
                 {url:'apple.jpg',type:'fruit',name:'A'},
                 {url:'apple2.jpg',type:'fruit',name:'A'},
                 {url:'apple3.jpg',type:'fruit',name:'A'},
                 {url:'apple4.jpg',type:'fruit',name:'A'},
                 {url:'apple5.jpg',type:'fruit',name:'A'},
    {
        url:'apple6.jpg',
        type:'fruit',
        name:'A'
    },
    {
        url:'bagels.jpg',
        type:'fastfood',
        name:'A'
    },
    {
        url:'branches.png',
        type:'branch',
        name:'A'
    },
    {
        url:'carrots.jpg',
        type:'vegitable',
        name:'A'
    },
    {
        url:'latte-art.jpg',
        type:'fruit',
        name:'A'
    },
    {
        url:'noodles.jpg',
        type:'fastfood',
        name:'A'
    },
    {
        url:'single-bagel.jpg',
        type:'fastfood',
        name:'A'
    }
];

function gallaryUI(results){
    var gallaryWrapper=document.getElementById('gallary');
   if(results && results.length) {
       var output='';
       output+='<ul class="gallary-items">';
       for(var i=0; i<results.length; i++){
        output+='<li><img src="' + results[i].url+ '" /></li>';
       }
       output+='</ul>';
       console.log(output);
       gallaryWrapper.innerHTML=output;
   }
}

gallaryUI(gallaryList);


function filterItems(results,filterValue){
  if(results && results.length && filterValue){
     var arr=[];
    //  var filterData=results.filter(function(items){
    //      return items.type === filterValue;
    //  })
     for(var j=0; j<results.length; j++){
         if(results[j].type === filterValue){
            arr.push(results[j]);
         }
     }
    //  gallaryUI(filterData);
    gallaryUI(arr);
  }
}


function bindClickOnFilters(){
    var filterWrapper=document.getElementById('gallaryType');
    filterWrapper.addEventListener('click',function(e){
        var target=e.target;
        var filterItemName=target.getAttribute('data-type');
        filterItems(gallaryList,filterItemName);
    });
}
bindClickOnFilters();