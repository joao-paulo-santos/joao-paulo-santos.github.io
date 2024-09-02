import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Navbar from "./components/navbar/navbar.jsx";
import { Outlet } from "react-router-dom";

const markdownSource = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

 a | b |
| - | - |
| asd | asd | `;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar></Navbar>
      <div className="w-auto h-auto flex justify-center pt-16 m-0">
        <a  href="https://vitejs.dev" target="_blank">
          <img className="logo p-0 size-20" src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react p-0 size-20" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR <br/>

        </p>
          <Markdown remarkPlugins={[remarkGfm]}>{markdownSource}</Markdown>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <Outlet />
    </>
  )
}

export default App
