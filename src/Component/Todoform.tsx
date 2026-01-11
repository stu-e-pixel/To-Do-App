
import { LuListCheck } from 'react-icons/lu';
import type { TodoformProps } from '../typescript/interface/interface';

const Todoform: React.FC<TodoformProps> = ({ formvalue, edit, handleChange, handleSubmit }) => {

  return (
    <>
    <h2 className="text-xl font-semibold mb-2 flex justify-center" ><LuListCheck className='mt-1.5 ' /> To-Do List</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 mb-3"
                name="name"
                value={formvalue.name}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 rounded"
              >
                {edit === null ? "Add Task" : "Edit"}
              </button>
            </form>
    </>
  )
}

export default Todoform