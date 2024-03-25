import { useState } from 'react';
import './App.css';

function App() {
  let [todos, settodos] = useState([]);

  let list = todos.map((value, i) => {
    return (
      <Items todo={value} key={i} indexNumber={i} list={todos} setlist={settodos} />
    )
  })


  const savetodolist = (e) => {
    let todo = e.target.toname.value;
    if (!todos.includes(todo)) {
      settodos([...todos, todo]);
    } else {
      console.log("already added")
    }

    e.preventDefault();
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      <form action="" onSubmit={savetodolist}>
        <input type="text" name='toname' />
        <button>Save</button>
      </form>
      <div className="todolist">
        <ul className='lists'>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;


function Items({ todo, indexNumber, list, setlist }) {
  function deleteRow(indexNumber) {
    let final_data = list.filter((value, index) => index !== indexNumber);
    setlist(final_data);
  }
  let [status, setstatus] = useState(false);
  const checkstatus = () => {
    setstatus(!status);

  }

  return (
    <>
      <li className={(status) ? `completed` : ''} onClick={checkstatus}>
        {indexNumber}. {todo}
        <span onClick={() => deleteRow(indexNumber)}>&times;</span>
      </li>

    </>
  )
}