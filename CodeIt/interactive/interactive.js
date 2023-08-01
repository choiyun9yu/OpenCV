"use strict";

// 1. 태그 선택하기

{ // 1-1. id로 선택하기 : getElementById('id');
    // 존재하지 않는 id 값으로 태그를 선택하면 null 값이 반환된다.
    const myTag = document.getElementById('btns');
    console.log(myTag);
}
{ // 1-2. class로 선택하기 : getElementsByClassName('class');
    // Element 뒤에 s가 붙음에 주의
    // HTMLCOllection 객체로 배열과 유사한 유사배열 형태로 인덱스 부여되어서 객체가 만들어짐
    // 그러나 배열함수를 사용할 순 없고, 대괄호를 활용해 인덱스 요소에 접근은 가능
    // length프로퍼티와 for of는 사용할 수 있다.
    // 유사배열에 담기는 요소는 깊이와 상관없이 위에서부터 순서대로 담긴다.
    // 존재하지 않는 class 값으로 태그를 선택하면 빈 유사배열이 반환된다.
    // 참고로 '*' 선택자를 전달하면 모든 태그를 선택할 수 있다.
    const myTags = document.getElementsByClassName('color-btn');
    console.log(myTags);
}
{ // 1-3. css 선택자로 선택하기 : querySelector('#css선택자'); querySelectorAll('.css선택자');
    // 존재하지 않는 요소를 선택할 경우 null 값이 리턴된다.
    const myTag = document.querySelector('#myNumber');  // css에서 id는 #을 앞에 붙임
    console.log(myTag);

    const myTag2 = document.querySelector('.color-btn'); // css에서 class는 .을 앞에 붙임
    console.log(myTag2);    // 그러나 클래스는 이렇게하면 가장 첫번째 요소만 반환됨

    const myTags = document.querySelectorAll('.color-btn');    // 이런경우 All을 사용
    console.log(myTags)
    // querySelectorAll은 요소가 하나밖에 없더라도 요소가 하나인 NodeList 반환한다.
}



// 2. 이벤트 : 웹페이지에서 일어날 수 있는 일들
{ // 2-1. 이벤트와 버튼 클릭
    const btn = document.querySelector('#myBtn');   // 버튼 선택
    btn.onclick = function () {                      // 버튼을 담은 변수에 함수 할당
        console.log('Hello Cdeit!');    // 이벤트를 다루는 함수를 이벤트 핸들러라하고,    
    } // 이벤트가 발생했을 때 특정 동작을 다루는 것은 이벤트 핸들링이라 한다.
}



// 3. 자바스크립트는 객체다.
{ // 3-1. window : 브라우저 창을 대변하는 최상단 객체, JS의 다른 모든 객체를 포함하고 있다.
    console.log(window);   
    console.log(window.innerHeight); // 브라우저 탭 내부 높이 값 반환
    console.log(window.innerWidth);  // 브라우저 탭 내부 너비 값 반환
    console.log
    window.open();  // 제목없음 빈 탭 새로 열림
    window.close(); // 탭이 닫힘
}
{ // 3-2. DOM(Document Object Model, 문서 객체 모델) : HTML문서를 객체로 표현한 것
    // 웹페이지 문서의 최상단 객체, html 문서에 접근하기 위해 사용, 새로운 객체 만들때도 사용
    console.log(document);  // html이 반환
    console.dir(document);  // 객체 형태로 다양한 프로퍼티들이 반환

    const title = document.querySelector('#title'); // js에서 html 문서 객체에 접근하여 스타일 수정
    title.style.color = 'red';

    // DOM Tree 전역객체인 window, 그 옆에 document 최상위 트리가 있고 html 문서들이 계층적으로 트리 구조를 이루고 있다.
    // DOM Tree에 더 잘 접근하기 위해서는 부모, 자식, 형제 노드 관계를 파악하는 것이 중요하다!
    // 노드는 다양한 노드 타입을 가지게 되는데 태그를 표현하는 노드를 요소노드, 문자를 표현하는 노드를 텍스트 노드라고 부른다.
    // 일반적으로 텍스트 노드는 요소노드의 자식 노드가되고 따로 자식 노드를 가질 수 없다.
}
{ // 3-3. DOM 트리 여행하기
    // id와 class를 활용해서 특정 태그에 접근할수도 있지만, 돔 트리의 구조를 활용해 접근할 수도 있다.
    const myTag = document.querySelector('#content');
    console.log(myTag);

    // 선택한 요소의 부모 노드에 접근하는 방법
    console.log(myTag.parentElement);


    // 선택한 요소의 자식 노드에 접근하는 방법
    console.log(myTag.children);            // 해당 요소의 자식 요소 접근, 대괄호 표기법으로 접근 가능
    console.log(myTag.firstElementChild);   // 해당 요소의 첫번째 자식에 접근
    console.log(myTag.lastElementChild);    // 해당 요소의 마지막 자식에 접근

    // 선택한 요소의 형제 노드에 접근하는 방법
    console.log(myTag.previousElementSibling);  // 이전 형제 요소에 접근, 없으면 null 출력
    console.log(myTag.nextElementSibling);      // 다음 형제 요소에 접근

    // 위 프로퍼티들은 연결해서도 사용 가능
    console.log(myTag.nextElementSibling.children); // 다음 형제 노드의 자식 노드
}
{ // 3-4. 요소 노드 주요 프로퍼티
    const myTag = document.querySelector('#content');
    console.log(myTag);
    
    // 3-4-1. innerHTML : 해당요소 아래 있는 html 자체를 문자열로 반환
    // 주의! 태그와 태그 사이 들여쓰기, 줄바꿈도 모두 리턴
    console.log(myTag.innerHTML);
    // 요소안의 html 수정할 때 더 자주 사용, //문자열로 할당하면 그 값으로 수정됨
    // myTag.innerHTML += '<li>Extoic</li>'; // 증감연산자로 마지막 요소 뒤에 추가할 수도 있음

    // 3-4-2. outerHTML : 해당 요소를 포함한 전체 HTML을 문자열로 반환
    // 주의! 태그와 태그 사이 들여쓰기, 줄바꿈도 모두 리턴
    console.log(myTag.outerHTML);
    // 아우터는 이너와 다르게 해당 요소를 포함하기 때문에 문자열로 태그를 새로 할당하면 자신이 바뀌게됨
    // myTag.outerHTML = '<li>Extoic</li>'

    // 3-4-3. textContent : 요소안에 있는 html 중 텍스트만 반환
    console.log(myTag.textContent);
    // 역시 새로운 값을 할당해서 값 수정 가능 (단, 특수 문자도 문자열로 취급하기 때문에 태그 적용은 안된다.)
    myTag.textContent = 'new text!';

}