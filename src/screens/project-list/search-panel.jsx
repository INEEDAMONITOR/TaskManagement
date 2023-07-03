import React, { useEffect, useState } from 'react';

function SearchPanel({ onInputChange, users, param, setParam }) {
    const inputNameChangeHandler = (event) => {
        setParam((prev) => {
            return {
                ...prev,
                name: event.target.value,
            };
        });
    };

    const selectChangeHandler = (event) => {
        setParam((prev) => {
            return {
                ...prev,
                personId: +event.target.value,
            };
        });
    };

    return (
        <form action={''}>
            <input type="text" onChange={inputNameChangeHandler} />
            <select value={param.personId} onChange={selectChangeHandler}>
                <option value="">Assignee</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </form>
    );
}

export default SearchPanel;
