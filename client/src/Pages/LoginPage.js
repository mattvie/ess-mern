import Forms from './Components/GenericForm';

export default function LoginPage() {

    const fields = [
        { name: "username", type: "text", placeholder: "Username" },
        { name: "password", type: "password", placeholder: "Password" },
    ];

    return (
        <div className="App-body">
            Login

            <Forms fields={fields} endpoint="http://localhost:4000/auth/login/" method="POST" />
        </div>
    );
}