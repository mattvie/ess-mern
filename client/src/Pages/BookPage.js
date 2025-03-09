import FetchData from "./Components/GenericFetch";
import { useParams } from 'react-router-dom';

export default function BooksPage() {
    const { id } = useParams();  // Gets the 'id' from the URL

    const fields = [
        { key: "name", label: "" },
        { key: "author", label: "By" },
        { key: "id", label: "ID" },
        { key: "description", label: "Description: " }
    ];

    return (
        <div className="App-body">
            <FetchData endpoint={`http://localhost:4000/books/${id}`} fields={fields} />
        </div>
    );
}