import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RouterR from "./routes/Router.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
  <RouterR/>
  </BrowserRouter>
    
)
