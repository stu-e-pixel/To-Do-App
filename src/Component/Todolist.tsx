import type { TodolistProps } from '../typescript/interface/interface';
import Todoitem from './Todoitem';

const Todolist = ({ productlist, manageButton, setmanageButton, handleEdit }: TodolistProps) => {
  return (
    <div className="flex flex-col gap-2 h-[200px] overflow-y-auto justify-start items-center p-4 bg-white shadow rounded-lg">
            {productlist?.map((product) => (
              <Todoitem product={product} manageButton={manageButton} setmanageButton={setmanageButton} handleEdit={handleEdit} />
            ))}
          </div>
  )
}

export default Todolist