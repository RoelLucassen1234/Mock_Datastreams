import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import Searcherbar from "./searchbar";
import Pagenumber from "./pagenumber";

const Data = () => {

    let [dataTestItems, setDataTestItems] = useState(0);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},

        };
        fetch('http://localhost:8081/', requestOptions)
            .then(response => response.json())
            .then(data => setDataTestItems(data.map((testItem, index) => {
                console.log(data);
                    return (
                        <tr key={index}>
                            <td>{testItem.testId}</td>
                            <td>{testItem.date}</td>
                            <td>{testItem.result ? "positive" : "negative"}</td>
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
