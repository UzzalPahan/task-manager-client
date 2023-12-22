const Completed = () => {
  return (
    <div className="bg-white p-8 rounded shadow-md w-full">
      <h2 className="text-center text-3xl">Completed Task</h2>

      <div>
        <div className="flex py-2">
          <li>demo</li>

          <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md">
            Edit
          </button>
          <button className="ml-2 bg-red-500  text-white px-4 py-2 rounded-md">
            Delete
          </button>
        </div>

        <div className="flex py-2">
          <li>demo</li>

          <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md">
            Edit
          </button>
          <button className="ml-2 bg-red-500  text-white px-4 py-2 rounded-md">
            Delete
          </button>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Edit
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form>
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
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn mr-4">Close</button>
                  <button className="btn">Update</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Completed;
