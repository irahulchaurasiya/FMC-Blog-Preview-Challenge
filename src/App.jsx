import './App.css'

function App() {

  return (
    <>
      <div className='bg-[hsl(47,88%,63%)] h-screen flex items-center justify-center'>
        <div className='container bg-[hsl(0,0%,100%)] w-[300px] h-[550px] sm:w-[375px] rounded-2xl border-2 shadow-[5px_5px_0px_0px_black]'>
          <div className='mx-6 my-6'>
            <img className='rounded-lg' src="/public/images/illustration-article.svg" alt="No image available" />
          </div>

          <div className='mx-6 text-[hsl(0,0%,07%)]'>
            <button className='bg-[hsl(47,88%,63%)] px-4 py-1 rounded-md font-bold'>Learning</button>
            <p className='mt-4 font-bold'>Published 21 Dec 2023</p>
            <h1 className='mt-4 text-2xl font-extrabold'>HTML & CSS foundations</h1>
            <p className='mt-4 font-semibold text-[hsl(0,0%,42%)]'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <div className='mt-4 flex items-center'>
              <img className='w-[40px]' src="/public/images/image-avatar.webp" alt="No image available" />
              <p className='ml-4 font-bold'>Greg Hooper</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
