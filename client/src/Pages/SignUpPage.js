import Forms from './Components/GenericForm';

export default function SignUpPage() {

    const fields = [
        { name: "fullName", type: "text", placeholder: "Full Name" },
        { name: "username", type: "text", placeholder: "Username" },
        { name: "password", type: "password", placeholder: "Password" },
        { name: "confirmPassword", type: "password", placeholder: "Confirm Password" },
        { name: "gender", type: "text", placeholder: "Gender" }
    ];

    return (
        <div className="App-body">
            SignUp

            <Forms fields={fields} endpoint="http://localhost:4000/auth/signup/" method="POST" />
        </div>
    );
}