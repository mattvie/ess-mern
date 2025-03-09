import Forms from './Components/GenericForm';

export default function DeletePage() {

    const fields = [
        { name: "id", type: "text", placeholder: "ID" }
    ];

    return (
        <div className="App-body">
            Delete

            <Forms fields={fields} endpoint="http://localhost:4000/books/" method="DELETE" />
        </div>
    );
}