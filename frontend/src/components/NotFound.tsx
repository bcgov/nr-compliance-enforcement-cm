import { useNavigate } from 'react-router'

export default function NotFound() {
  const navigate = useNavigate()
  const buttonClicked = () => {
    navigate('/', { state: { data: undefined } }) // reset the state
  }
  return <div>Wasn't found yo.</div>
}
