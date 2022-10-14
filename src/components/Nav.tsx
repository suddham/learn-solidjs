import { NavLink } from "solid-app-router";
import { Component } from "solid-js";

const Nav: Component = () => {
    const primaryLinkClass = "text-success";
    
    return (
        <nav class="my-4">
            <NavLink href="/" class="btn btn-link text-secondary" end activeClass={primaryLinkClass}>Home</NavLink>
            <NavLink href="/saved-repos" class="btn btn-link text-secondary" activeClass={primaryLinkClass}>Saved repos</NavLink>
        </nav>
    );
};

export default Nav;