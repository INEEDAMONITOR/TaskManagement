import React, { useEffect, useState } from 'react';
import SearchPanel from './search-panel';
import List from './list';
import './index.css';
import { cleanObject, useDebounce, useMount } from 'utils/model';
import * as qs from 'qs';
const apiUrl = process.env.REACT_APP_API_URL;
function ProjectListScreen() {
    const [param, setParam] = useState({
        name: '',
        personId: '',
    });
    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]);
    const debouncedParam = useDebounce(param, 500);
    const userInputHandler = (userInput) => {
        setParam({ ...userInput });
    };

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async (response) => {
            if (response.ok) {
                setUsers(await response.json());
            }
        });
    });

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
            async (res) => {
                if (res.ok) {
                    setList(await res.json());
                }
            }
        );
    }, [param, users]);

    return (
        <div className="project">
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    );
}

export default ProjectListScreen;
