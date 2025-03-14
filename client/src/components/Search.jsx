import { useState } from 'react'

function Search() {
    const [findButter, setFindButter] = useState('');

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
                    alert('Butter found!');
                } else {
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
        </div>
    )
}

export default Search