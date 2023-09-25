
import { useParams } from 'react-router-dom';

function Verify() {
  const { token  } = useParams();
  console.log(token);
  return (
    <div>Verify</div>
  )
}

export default Verify