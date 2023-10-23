import React, { useState, useEffect } from 'react'
/*/
function UserSpace(){

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/midpoint").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
        }, [])
        // [] used so that it only runs once
        return (
            <div>
                {(typeof data.members === 'undefined') ? (
                    <p>Loading...</p>
                    ): (
                        data.members.map((member, i) => (
                    <p key={i}>{member}</p>
                    ))
                    )}
            </div>
        )
    }


export default UserSpace;

/*/