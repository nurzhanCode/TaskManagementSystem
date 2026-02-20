import { useState } from 'react'


function App() {


  return (
      <div className="max-w-screen-lg mx-auto">
      <div className="grid grid-cols-12 gap-gap-20 min-h-screen bg-gray-100">
          <header className="col-span-3 bg-white border-b border-gray-100 py-gap-16">
              <h1 className="text-size-24 font-bold text-primary-1000">TaskSystem</h1>
          </header>

          <main className="col-span-9 py-gap-24">
              <div className="grid grid-cols-12 gap-gutter">


                  <aside className="col-span-3 bg-gray-0 p-gap-16 rounded-round-12 border border-gray-100">
                      <nav>Menu</nav>
                  </aside>

                  <section className="col-span-9 grid grid-cols-3 gap-gutter">
                      <div className="bg-white p-gap-20 rounded-round-12 shadow-sm">Task 1</div>
                      <div className="bg-white p-gap-20 rounded-round-12 shadow-sm">Task 2</div>
                      <div className="bg-white p-gap-20 rounded-round-12 shadow-sm">Task 3</div>
                  </section>

              </div>
          </main>
      </div>
      </div>
  )
}

export default App
