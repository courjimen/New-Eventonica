import { useReducer } from 'react'

const initialState = {
    scents: '',
    color: 'White',
    quantity: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.value };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
}

function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submit button clicked")

        try {
            const response = await fetch('http://localhost:3000/butters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state),
            });

            const responseData = await response.json();
            alert('Butter added successfully!')
        } catch (error) {
            console.error('Error: ', error)
            alert('Unable to add your butter :(')
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'quantity') {
            if (value === '' || (Number(value) > 0)) {
                dispatch({ type:'UPDATE_FIELD', field: name, value })
            }
        } else {
            dispatch({ type:'UPDATE_FIELD', field: name, value })
        }
    }

    return (
        <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-orange-100 p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">Add a Whipped Butter</h1>
          <div className="mb-4">
            <label htmlFor="scents" className="block text-sm font-medium text-gray-700">
              Fragrance
            </label>
            <input
              placeholder="Insert Scent"
              id="scents"
              name="scents"
              value={state.scents}
              onChange={handleChange}
              className="mt-1 block w-full border border-orange-700 rounded-md shadow-sm focus:ring focus:ring-orange-200 focus:border-orange-500 p-2 bg-orange-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-sm font-medium text-gray-700">
              What Color?
            </label>
            <select
              id="color"
              name="color"
              value={state.color}
              onChange={handleChange}
              className="mt-1 block w-full border border-orange-700 rounded-md shadow-sm focus:ring focus:ring-orange-200 focus:border-orange-500 p-2 bg-orange-300"
            >
              <option value="White">White</option>
              <option value="Yellow">Yellow</option>
              <option value="Ombre">Ombre</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              placeholder="Insert Number"
              id="quantity"
              name="quantity"
              type="number"
              value={state.quantity}
              onChange={handleChange}
              className="mt-1 block w-full border border-orange-700 rounded-md shadow-sm focus:ring focus:ring-orange-200 focus:border-orange-500 p-2 bg-orange-300"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded border border-black focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
            >
              Add Butter
            </button>
          </div>
        </form>
      </div>
    );
  }
export default Form