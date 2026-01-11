import type { TodoitemProps } from '../typescript/interface/interface';
const Todoitem = ({ product, manageButton, setmanageButton, handleEdit }: TodoitemProps) => {
  return (
    <div
                key={product.id}
                className="w-full flex flex-row border-b gap-4 justify-between items-center p-2 bg-blue-100 shadow rounded-lg"
              >
                <input
                  type="checkbox"
                  onChange={() => setmanageButton(product)}
                  checked={manageButton === product}
                />
                <h4
                  style={{
                    textDecoration: product.complete ? "line-through" : "none",
                    textDecorationThickness: "2px",
                  }}
                >
                  {product.name}
                </h4>

                <div>
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-emerald-600 rounded w-20 h-15"
                  >
                    Edit
                  </button>
                </div>
              </div>
  )
}

export default Todoitem