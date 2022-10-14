import { Route, Routes } from "solid-app-router";
import type { Component } from "solid-js";

import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import SavedRepos from "./components/pages/SavedRepos";


const App: Component = () => {
    return (
        <div class="container">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/saved-repos" element={<SavedRepos />} />
            </Routes>
        </div>
    );
};

export default App;
