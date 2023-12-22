import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";

const AddTask = () => {
  const [taskList, setTaskList] = useState([]);
  const addTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;
    const alltask = { task };
    axios.post("http://localhost:5001/task", alltask).then((result) => {
      console.log(result);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5001/task").then((result) => {
      const taskData = result.data;
      setTaskList(taskData);
    });
  }, []);

  const handleDelete = id =>{
    axios.delete(`http://localhost:5001/task/${id}`)
    .then(result =>{
        if (result.data.deletedCount > 0)
        swal("Successfully!", "Task Deleted!", "success");
    })
}

  return (
    <div className="bg-white p-8 rounded shadow-md w-full">
      <h2 className="text-center text-3xl">AddTask</h2>
      <form onSubmit={addTask}>
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="task"
          placeholder="add task"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Add Task
        </button>
      </form>

      <div>
        {taskList.map((task) => (
          <div className="flex py-2" key={task?._id}>
            <li>{task?.task}</li>

            <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
            <button onClick={() => handleDelete(task?._id)} className="ml-2 bg-red-500  text-white px-4 py-2 rounded-md">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTask;
