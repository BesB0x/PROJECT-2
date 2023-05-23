import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import SpinnerTwo from './SpinnerTwo'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Home = ( { output,setOutput,authenticated }  ) => {
  const [input, setInput] = useState('')
  const [ error,setError ] = useState('')
  const [ loading,setLoading ] = useState(false)
  const [ submitLoading, setSubmitLoading ] = useState(false)
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    setSubmitLoading(true)
    e.preventDefault()
    try {
      const { data } = await authenticated.get(`rhyme?word=${input}`)
      setOutput(data)
      setSubmitLoading(false)
      navigate('/results')
    } catch (error) {
      console.log(error)
    }
  }
  const submitRandom = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await authenticated.get('randomword')
      setInput(data.word)
      setLoading(false)
      console.log(data)
    } catch (error) {
      setError(error)
    }
  }
  console.log('output', output)
  console.log('input', input)
  return (
    <Container>
      <Col as="form" xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} onSubmit={handleSubmit}>
        <Row>
          <h1>{'Mom\'s Spaghetti'}</h1>
          <div id='search'>
            <input type="text" name="search" placeholder='Search' value={input} onChange={handleChange} />
            { submitLoading ? <SpinnerTwo /> : <button className='submit'>Submit</button>}
          </div>›
          <Row>
            {loading ? <Spinner /> : <button id="randomBtn" className='btn w-100 mb-4' onClick={submitRandom}>Random word</button>}
          </Row>
          {/* <Row>
          </Row> */}
        </Row>
      </Col>
    </Container>
  )
}
export default Home