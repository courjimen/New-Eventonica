import { useState } from 'react'

function Search() {
    const [findButter, setFindButter] = useState('');
    const [foundButter, setFoundButter] = useState([]);

    const searchButter = () => {
        fetch(`http://localhost:3000/butters?scents=${findButter}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setFoundButter(data);
                    alert('Butter found!');
                } else {
                    setFoundButter([]);
                    alert('Unable to find your butter')
                }
            })
            .catch((error) => {
                console.error('Error', error)
                alert('Unable to find your butter')
            })
    }

    return (

        <div>
            <label> Find a Scent: </label>
            <input
                placeholder='Insert scent to find'
                type='text'
                value={findButter}
                onChange={(e) => setFindButter(e.target.value)}
            />
            <button onClick={searchButter}>Search Scent</button>

            {foundButter.length > 0 && (
                <div>
                    <h3>Found Butters: </h3>
                    <ul>
                        {foundButter.map((butter) => (
                            <li key={butter.id}>
                                {butter.scents} - {butter.color} - {butter.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    );
}

export default Search