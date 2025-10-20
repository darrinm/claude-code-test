import Counter from './components/Counter'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Demo App</h1>
        <p>A showcase of interactive React components</p>
      </header>
      <main className="app-main">
        <Counter />
        <TodoList />
      </main>
      <footer className="app-footer">
        <p>Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
