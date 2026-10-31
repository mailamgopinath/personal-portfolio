import { Link } from 'react-router-dom';
import Background from '../components/Background.jsx';

export default function NotFound() {
  return (
    <>
      <Background />
      <div className="notfound">
        <h1 className="gradient-text">404</h1>
        <p>This page does not exist.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </>
  );
}
