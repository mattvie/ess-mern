import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GenericFetch({ endpoint, fields }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(endpoint)
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, [endpoint]);

    return (
        <div>
            {data.length > 0 &&
                data.map((item) => (
                    <div key={item.id} className="content">
                        {fields.map((field) => (
                            <p key={field.key}>
                                <strong>{field.label} </strong>
                                {item[field.key]}
                            </p>
                        ))}
                        {item.id && (
                            <p>
                                <Link to={`/books/${item.id}`}>View Details</Link>
                            </p>
                        )}
                    </div>
                ))}
        </div>
    );
}

