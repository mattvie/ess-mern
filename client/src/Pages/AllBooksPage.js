import FetchData from "./Components/GenericFetch";

export default function BooksPage() {
    const fields = [
        { key: "name", label: "" },
        { key: "author", label: "By" },
        { key: "id", label: "ID" }
    ];

    return (
        <div className="App-body">
            <FetchData endpoint="http://localhost:4000/books" fields={fields} />
        </div>
    );
}