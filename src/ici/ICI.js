import { CssBaseline } from "@mui/material";
import part1 from "./part1.svg";
import part2 from "./part2.svg";
import part3 from "./part3.svg";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";
import Navbar from "../components/container/navbar";

export default function ICIPage() {
  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>Wenjia Liu | Usability Approach for ICI Website</title>
      </Helmet>
      <Navbar />

      <div className="w-full flex flex-col items-center">
        <img src={part1} alt="" />
        <img src={part2} alt="" />
        <img src={part3} alt="" />

        <br />
        <br />
        <br />

        <div className="flex flex-row gap-8">
          <Button
            sx={{
              color: "black",
              borderRadius: 8,
              backgroundColor: "#DEFF99",
              fontWeight: "bold",
            }}
            variant="contained"
            href="https://www.figma.com/proto/aop7GuPad58SjuCQaZOUzd/Report-%2B-Presentation-(Copy)?type=design&node-id=145-191&t=Cc1j19qFW7lzjo3U-1&scaling=scale-down&page-id=0%3A1"
          >
            Usability Report
          </Button>
          <Button
            sx={{
              color: "black",
              borderRadius: 8,
              backgroundColor: "#DEFF99",
              fontWeight: "bold",
            }}
            variant="contained"
            href="https://www.figma.com/proto/aop7GuPad58SjuCQaZOUzd/Report-%2B-Presentation-(Copy)?type=design&node-id=306-37&t=7yoXUNd03W97J5h9-1&scaling=contain&page-id=306%3A20&mode=design"
          >
            Presentation
          </Button>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
