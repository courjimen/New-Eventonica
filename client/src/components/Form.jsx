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
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Add a Whipped Butter</h1>
                    <div>
                        <label for='scents'>Fragrance</label><br />
                        <input
                            placeholder='Insert Scent'
                            id='scents'
                            name='scents'
                            value={state.scents}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label for='color'>What Color?</label> <br />
                        <select
                            id='color'
                            name='color'
                            value={state.color}
                            onChange={handleChange}>
                            <option value='White'>White</option>
                            <option value='Yellow'>Yellow</option>
                            <option value='Ombre'>Ombre</option>
                        </select>
                    </div>
                    <div>
                        <label for='quantity'>Quantity</label><br />
                        <input
                            placeholder='Insert Number'
                            id='quantity'
                            name='quantity'
                            type='number'
                            value={state.quantity}
                            onChange={handleChange}
                        /> <br />
                        <button type='submit'>Add Butter</button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Form