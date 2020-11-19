import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import Searcherbar from "./searchbar";
import Pagenumber from "./pagenumber";

const Data = () => {

    let [dataTestItems, setDataTestItems] = useState(<div/>);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: 'React POST Request Example'})
        };
        fetch('https://localhost:8080/', requestOptions)
            .then(response => response.json())
            .then(data => setDataTestItems(data.map(testItem, index => {
                    return (
                        <tr key={index}>
                            <td>{testItem.testId}</td>
                            <td>{testItem.date}</td>
                            <td>{testItem.result}</td>
                        </tr>
                        )
                }))
            )
    }, []);

    return (
        <div>
            <Searcherbar/>
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Test Data ID</th>
                        <th>Test Date Time</th>
                        <th>Result</th>
                    </tr>
                    </thead>
                    <tbody>{dataTestItems}</tbody>
                </Table>
            </div>
            <Pagenumber/>
        </div>
    );
};

export default Data;
