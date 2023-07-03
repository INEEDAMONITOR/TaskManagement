import React from 'react';
import { validateLocaleAndSetLanguage } from 'typescript';

function List({ list, users }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Project name</th>
                    <th>Assignee</th>
                </tr>
            </thead>
            <tbody>
                {list.map((project) => (
                    <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>
                            {users.find((user) => user.id === project.personId)
                                ?.name || 'Unknown'}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default List;
