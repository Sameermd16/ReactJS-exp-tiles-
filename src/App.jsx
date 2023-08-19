import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {

  const [jobs, setJobs] = useState([])
  console.log(jobs)
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  async function fetchJobs() {
    const {data} = await axios.get(url)
    setJobs(data)
    setLoading(false)
  }  

  useEffect(() => {
    fetchJobs()
  }, [])

  
  if(loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }

  const {id, order, title, duties, company, dates} = jobs[value]

  return (

    <section className='container'>
      <h1 className='text-center'>Experience</h1>
      <div className='d-flex gap-4'>
        <div className='mb-3 d-flex flex-column gap-4'>
          {
            jobs.map((item, index) => {
              return (<button className={`btn btn-outline-secondary ${index === value && 'active'}`}
                onClick={() => setValue(index)}
              >{item.company}</button>)
            })
          }
        </div>
        <div>
        <h3>{title}</h3>
        <h5>{company}</h5>
        <p>{dates}</p>
        {
          duties.map((item) => {
            return (
              <div>
                <p><FaAngleDoubleRight /> {item}</p>
              </div>
            )
          })
        }
        </div>
      </div>
    </section>
    
  )
}

export default App
