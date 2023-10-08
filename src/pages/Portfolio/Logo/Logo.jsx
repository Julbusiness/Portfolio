import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky6.png";
import "./Logo.css";

export default function Logo() {
  return (
    <section className="logo">
      <Bandeau image={imageBandeau} />
      <div className="logo-container">

      </div>
    </section>
  )
}