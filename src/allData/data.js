import { v4 as uuid } from "uuid";
import moto from "../assets/watches/moto.png";
import rolex from "../assets/watches/rolex.png";
import zenith from "../assets/watches/zenith.png";

export const data = [
  {
    id: uuid(),
    brandName: "MOTO",
    price: "247,000",
    itemURL: moto,
  },
  {
    id: uuid(),
    brandName: "ROLEX",
    price: "759,000",
    itemURL: rolex,
  },
  {
    id: uuid(),
    brandName: "ZENITH",
    price: "525,000",
    itemURL: zenith,
  },
];
