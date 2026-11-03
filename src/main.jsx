import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// // import dari file tambah
// import Tambah from './tambah.jsx'
// // import dari file input_teks
// import InputTeks from './input_teks.jsx'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <div>
//       <Tambah />
//       <InputTeks/>
//     </div>
//   </React.StrictMode>,
// )

// input dari file tambah_kurang
import TambahKurang from './tambah_kurang.jsx'
// input dari file tambah_kurang
import InputQuiz from './input_quiz.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <TambahKurang />
      <InputQuiz />
    </div>
  </React.StrictMode>,
)
