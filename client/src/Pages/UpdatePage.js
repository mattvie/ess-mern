import Forms from './Components/GenericForm';

export default function UpdatePage() {

    const fields = [
        { name: "name", type: "text", placeholder: "Name" },
        { name: "author", type: "text", placeholder: "Author" },
        { name: "description", type: "text", placeholder: "Description" },
        { name: "id", type: "text", placeholder: "ID" }
    ];

    return (
        <div className="App-body">
            Update

            <Forms fields={fields} endpoint="http://localhost:4000/books/" method="PUT" />
        </div>
    );
}