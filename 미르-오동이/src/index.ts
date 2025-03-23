const form = document.getElementById("todo-form") as HTMLInputElement;
// as HTMLInputElement 써서 명시적 타입 단언+ null 방지(안 쓰면 에러났음)
const input = document.getElementById("form-input") as HTMLInputElement;
const toDoList = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");

//todo-container__button은 타입이 submit이기 떄문에 가져오지 않아도 됨

form.addEventListener("submit",(e)=>{ //폼 이벤트 리스너 등록
    e.preventDefault(); //submit시 기본적으로 새로고침하려고 해서
    
    const todoText = input.value.trim();
    if(!todoText) return;


    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent =  todoText;

    //버튼 done-button 이런 기본 태그 없음
    //기본 태그로 써야함
    //버튼 역할 구분시 className or textContent로 구분 
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "완료"; //문자 설정
    doneBtn.className = "render-container__item-done-button"; //css 클래스 부여


    li.appendChild(span);
    li.appendChild(doneBtn);
    toDoList?.appendChild(li);
    input.value = ""; // 입력창 비우기


    doneBtn.addEventListener("click",()=>{ //굳이 e로 객체 찾아올 필요 X
        const doneLi = document.createElement("li");
        const doneSpan = document.createElement("span");
        doneSpan.textContent = todoText;
      
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "삭제";
        deleteBtn.className = "render-container__item-delete-button";
      
        doneLi.appendChild(doneSpan);
        doneLi.appendChild(deleteBtn);
        doneList?.appendChild(doneLi);
      
        li.remove(); //    

    deleteBtn.addEventListener("click",()=>{
        li.remove();
    });
});
});