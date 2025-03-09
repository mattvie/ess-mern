import Forms from './Components/GenericForm';

export default function WritePage() {

    const fields = [
        { name: "name", type: "text", placeholder: "Name" },
        { name: "author", type: "text", placeholder: "Author" },
        { name: "description", type: "text", placeholder: "Description" }
    ];

    return (
        <div className="App-body">
            Write

            <Forms fields={fields} endpoint="http://localhost:4000/books/" method="POST" />
        </div>
    );
}