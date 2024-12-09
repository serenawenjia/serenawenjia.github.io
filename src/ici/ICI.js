import part1 from "./part1.svg";
import part2 from "./part2.svg";
import part3 from "./part3.svg";

export default function ICIPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <img src={part1} />
      <img src={part2} />
      <img src={part3} />
    </div>
  );
}
