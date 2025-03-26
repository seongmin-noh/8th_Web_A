//1.HTML 요소 선택

const input = document.querySelector(".container__form__input") as HTMLInputElement
const form = document.getElementById("todo_form") as HTMLFormElement
const todolist=document.querySelector("#todo-list") as HTMLUListElement
const donelist=document.querySelector("#done-list") as HTMLUListElement

//2.할일 type을 정의
type Todo={
  id:number
  text:string
}

let todos:Todo[]=[];
let doneTasks:Todo[]=[];

//할일 목록 렌더링 함수 정의
const renderTasks = ():void =>{
  todolist.innerHTML=''
  donelist.innerHTML=''

  todos.forEach((todo):void=>{
    const li = createTodoElement(todo, false)
    todolist.appendChild(li)
  })

  doneTasks.forEach((todo):void=>{
    const li = createTodoElement(todo, true)
    donelist.appendChild(li)
  })
}

//3. 할일 텍스트 입력 처리함수(공백 잘라줌)
const getTodoText =   ():string=>{
  return input.value.trim()
}
//4. 할일 추가 처리함수

const addTodo=(text: string):void=>{
  todos.push({id: Date.now(),text})
  input.value=''
  renderTasks()
}

//5. 할일 상태변경(완료로 이동)
const completeTodo=(todo:Todo):void=>{
  todos=todos.filter((t): boolean=> t.id !== todo.id)
  doneTasks.push(todo)
  renderTasks()
}
//6. 완료된 할일 삭제함수
const deleteTodo =(todo:Todo): void =>{
  doneTasks=doneTasks.filter((t):boolean=> t.id !== todo.id)
  renderTasks()
}
//7.할일 아이텝 생성 함수(완료여부에따른 텍스트나 색상설정)
const createTodoElement = (todo: Todo, isDone: boolean): HTMLElement => {
  const li = document.createElement('li')
  li.classList.add('render-container__item')

  const p = document.createElement('p')
  p.classList.add('render-container__item-text')
  p.textContent = todo.text
  li.appendChild(p)

  const button = document.createElement("button")
  button.classList.add('render-container__item-button')

  if (isDone) {
    button.textContent = "삭제"
    button.style.backgroundColor = "#dc3545"
  } else {
    button.textContent = "완료"
    button.style.backgroundColor = "#28a745"
  }

  button.addEventListener('click', (): void => {
    if (isDone) {
      deleteTodo(todo)
    } else {
      completeTodo(todo)
    }
  })

  li.appendChild(button)
  return li
}


// <ul  id="done-list" class="container__section__list">
//         <li class="render-container__item">
//           <p class="render-container__item-text">123</p>
//           <button class="render-container__item-button">삭제</button>
//         </li>
//       </ul>
    
//8.폼제출 이벤트 리스너
form.addEventListener('submit', (event:Event):void =>{
  event.preventDefault()
  const text = getTodoText()
  if(text){
    addTodo(text)
  }
})

renderTasks()