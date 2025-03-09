export default function Header() {
    return (
        <header className="App-header">
            <a href="/" className="App-logo">Logo</a>

            <nav>
                <a href="/signup">SignUp</a>
                <a href="/login">Login</a>
                <a href="/books">AllBooks</a>
                <a href="/write">Write</a>
                <a href="/update">Update</a>
                <a href="/delete">Delete</a>
            </nav>
        </header>
    );
}