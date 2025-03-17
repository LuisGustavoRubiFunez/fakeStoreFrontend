import { Link } from 'react-router-dom';
import '../../less/main.less';
const button = ({ text,where}) => {
return (
    <div className='buttonChangePage'>
    <Link to={where}>{text}</Link>
    </div>
)

}
export default button;