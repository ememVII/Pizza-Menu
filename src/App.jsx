import Footer from './Components/Footer'
import Header from './Components/Header'
import Pizzas from './Components/Pizzas'
function App() {
  return (
    <>
      <div className="container max-w-[52rem] flex flex-col p-6 pt-6 gap-9 mx-auto">
        <Header />
        <Pizzas />
        <Footer />
      </div>
      <h3 className="attribution bottom-0 w-full text-center text-base bg-[#edc84b] mt-10">
        Coded by &copy; <span className='text-lg font-medium'>Mahmoud Magdy</span> | <a href="https://github.com/ememVII" target='_blank'>👉🏻 Github</a>
      </h3>
    </>
  )
}

export default App
