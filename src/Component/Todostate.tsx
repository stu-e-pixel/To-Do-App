import type { Todosate } from '../typescript/interface/interface';


const Todostate = ({ counter, completeCount }: Todosate) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow text-center">
            <button className="ml-3">Total: {counter}</button>
            <button className="ml-10">Complete: {completeCount}</button>
            <button className="ml-10">
              InComplete : {counter - completeCount}
            </button>
          </div>
  )
}

export default Todostate