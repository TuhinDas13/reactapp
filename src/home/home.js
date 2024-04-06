export function Home(props) {

    return <div>
        <h1>Hello {props.username}</h1>
        <input type='button' value='Logout' onClick={()  => props.handleLogin(false,'')} />
    </div>
}