// colors.js 라는 파일을 새로운 파일에 추가해주기만 하면 됨.
// <script src="colors.js"></script> 를 추가함에 따라.

// WEB 인 index.html을 복사하여 index2.html을 생성하고 colors.js 로 대체해보았다.
var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i=i+1;
    }
  }
}

//    function LinksSetColor(color){
//      var alist = document.querySelectorAll('a');
//      var i = 0;
//      while(i < alist.length){
//        alist[i].style.color = color;
//        i=i+1;
//      }
//    }

var Body = {
  setColor:function(color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
//    function BodySetColor(color){
//      document.querySelector('body').style.color = color;
//    }

//    function BodySetBackgroundColor(color){
//      document.querySelector('body').style.backgroundColor = color;
//    }

function nightDayHandler(self){
  var target = document.querySelector('body');

  if(self.value==='night'){ // this 라는 값은 함수 안에서, input의 버튼을 가리키지 못함.
    Body.setBackgroundColor('black');
//      BodySetBackgroundColor('black');
    Body.setColor('yellow');
//      BodySetColor('white');
    self.value = 'day';

    Links.setColor('powderblue');

  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
  }
}
