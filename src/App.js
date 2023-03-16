
import './App.css';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')
  // const [deletedToDo,setDelete]=useState([])
  const [day, setDay] = useState("")

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.toLocaleString("default", { weekday: "long" });
    setDay(dayOfWeek);
  }, []);



  useEffect(()=>{
    document.title=`You have ${toDos.length} pending tasks`
  });

  // addtodo
  const addItem=()=>{
    if (toDo.length === 0) {
      toast('Todo can not be empty!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
       }
    else{
  
    // console.log(value)
    setTodos(
    [...toDos,{id:Date.now(),text:toDo,status:false}])} 
    setTodo("");
    }
  return (
    <div className="App">
      <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's  🌝 ☕{day} </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addItem} className="fas fa-plus"></i> 
        
      </div>
      <ToastContainer />

      <div className="todos">
        
          { toDos.map((obj)=>{
            return(
              
              <div key={obj.id} className="todo" >
              <div className="left">
                <input onChange={(e)=>{
                  // console.log(e.target.checked);
                  console.log(obj);
                  setTodos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                          obj2.status=e.target.checked
                    }
                    return obj2
                  }))
                }} value={obj.status} type="checkbox"  />
                <p>{obj.text}</p>
              </div>

              {/* deletion */}
              <div className="right">
              <i onClick={(e)=>{
                setTodos(toDos.filter(obj2 => {
                  let temp;
                  
                  if (obj2.id !== obj.id){
                    temp = 404
                  }

                  return temp;
                }));
              }} className="fas fa-times"></i>
              </div>
          </div>
            )
            
          })
        }

    {toDos.map((obj)=>{
              if(obj.status){
                return (
                  <div key={obj.id}  className='Completed'>
                  <div className='left'>
                  <strike> <h1>{obj.text}</h1></strike>
                  </div>
                  <div className='right'>
                    Completed            
                </div>
                </div>

                )
              }
              return null
            })}

        {/* commpleted check */}
{/*         
      <h2 className='TaskDone'> Completed Tasks</h2> */}
        


        
      </div>
    </div>
    </div>
  );
}

export default App;