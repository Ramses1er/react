import './style.css'
import img from './OIP.jpeg'
export default function App01() {
  return (
    <>
      <div className="text">Mon premier composant</div>
      <img src={img} alt="" />
    </>
  );
}
