import "./Cupcake.css";
import { Link } from "react-router-dom";

interface CupcakeProps {
  data: {
    id: number;
    accessory: string;
    color1: string;
    color2: string;
    color3: string;
    name: string;
  };
}

function Cupcake({ data }: CupcakeProps) {
  return (
    <Link to={`/cupcakes/${data.id}`}>
      <div className="cupcake-container">
        <div className="cupcake">
          <div className={`accessory ${data.accessory}`} />
          <div className="cream">
            <div
              className="cream-1"
              style={{
                backgroundColor: data.color1,
              }}
            />
            <div
              className="cream-2"
              style={{
                backgroundColor: data.color2,
              }}
            />
            <div
              className="cream-3"
              style={{
                backgroundColor: data.color3,
              }}
            />
          </div>
          <div className="bottom">
            <div className="bottom-in">
              <div className="face">
                <div className="eyes">
                  <div className="left-eye" />
                  <div className="right-eye" />
                </div>
                <div className="mouth" />
              </div>
            </div>
          </div>
        </div>

        <div className="cupcake-name">{data.name}</div>
      </div>
    </Link>
  );
}

export default Cupcake;
