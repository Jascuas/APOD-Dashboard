import logo from '../../assets/logo.png';

export default function NavBar() {
    return (
        <nav className="border-b p-6 bg-gray-300">
            <div className="flex w-52">
                <a href="/"><img src={logo} alt="logo" /></a>
            </div>
        </nav>
    )
}