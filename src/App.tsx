import React, { ReactElement } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'

import { Header, Home, Detail } from './components'
import { ROUTES } from './constants'

const App: React.FC = (): ReactElement => {
  return (
    <div className="flex mb-2 flex-col">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 1250,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <Header />
      <div className="p-4">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />}>
            <Route path=":id" element={<Detail />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
