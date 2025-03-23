const form = document.getElementById("todo-form") as HTMLInputElement;
const input = document.getElementById("form-input") as HTMLInputElement;
const toDoList = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");

form.addEventListener("submit",(e)=>{ 
    e.preventDefault(); // 기본 동작(새로고침) 방지지
    
    const todoText = input.value.trim();
    if(!todoText) return;

    //할 일 요소 생성
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent =  todoText;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "완료"; 
    doneBtn.className = "render-container__item-done-button"; //css 클래스 부여

    //li에 텍스트&버튼 추가가
    li.appendChild(span);
    li.appendChild(doneBtn);
    toDoList?.appendChild(li);
    input.value = ""; // 입력창 비우기

    //완료 버튼 클릭시
    doneBtn.addEventListener("click",()=>{ 
        const doneLi = document.createElement("li");
        const doneSpan = document.createElement("span");
        doneSpan.textContent = todoText;
      
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "삭제";
        deleteBtn.className = "render-container__item-delete-button";
      
        doneLi.appendChild(doneSpan);
        doneLi.appendChild(deleteBtn);
        doneList?.appendChild(doneLi);
      
        li.remove(); //기존 할 일에서 삭제제   

    //삭제 버튼 기능
    deleteBtn.addEventListener("click",()=>{
        doneLi.remove();
    });
});
});