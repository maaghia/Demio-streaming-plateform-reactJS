
export default function Navbar(){


    return(
        <div className="navbar bg-base-100 shadow-xl">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">DEMO Streaming</a>
        </div>
        <div className="flex-2">
            <button class="btn btn-login">Log in</button>
            <button class="btn btn-accent btn-trial">Start your free trial</button>
        </div>
        </div>
        
        
    );
}