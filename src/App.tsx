import Header from './components/Header'
import Intro from './components/Intro'

function App() {

  return (
    <>
     <Header/>
     <main>
        <section id="intro">
          <Intro/>
        </section>
        <section id="projects">
          {/* Projects */}
        </section>
        <section id="contact">
          {/* Contact */}
        </section>
      </main>
    </>
  )
}

export default App
