import React from "react"
import ReactDOM from "react-dom"

import Footer from "./components/Footer.js"
import MainContent from "./components/MainContent.js"
import Header from "./components/Header.js"

function MyApp() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById("root"))
