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
        <div className="flex flex-col">
            <div className="flex items-center space-x-2">
                <label > Find a Scent: </label>

                <input className="border border-black rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                    placeholder='Insert scent to find'
                    type='text'
                    value={findButter}
                    onChange={(e) => setFindButter(e.target.value)}
                />
                <button className="border border-black rounded px-4 py-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300" onClick={searchButter}>Search Scent</button>
            </div>
            
            {foundButter.length > 0 && (
                <div className="flex items-center space-x-2">
                    <h3 className="text-med font-semibold">We found </h3>
                    <ul>
                        {foundButter.map((butter) => (
                            <li key={butter.id}>
                                {butter.quantity} of {butter.scents}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    );
}

export default Search