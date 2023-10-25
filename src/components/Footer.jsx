import { logo_2 } from "../assets/home";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#212121] py-14 text-white">
      <Container>
        <div className="grid place-items-center sm:text-left text-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {/* <img src={logo_2} alt="Grant canyon" className="w-44 h-14" /> */}
          <div className="sm:mt-0 mt-14">
            <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4">products</h1>
            <ul>
              <li>
                <a href="#">Communication</a>
              </li>
              <li>
                <a href="#">Remove access</a>
              </li>
              <li>
                <a href="#">view all products</a>
              </li>
             
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4">Company</h1>
            <ul>
              <li>
                <a href="#">About US</a>
              </li>
              <li>
                <a href="#">Carrers</a>
              </li>
              <li>
                <a href="#">parteners</a>
              </li>
              <li>
                <a href="#">contact US</a>
              </li>
            
            </ul>
          </div>
          
          <div>
            <h1 className="font-bold capitalize sm:pt-0 pt-8 pb-4">features</h1>
            <ul>
              <li>
                <a href="#">Auto fill</a>
              </li>
              <li>
                <a href="#">password</a>
              </li>
              <li>
                <a href="#">authenticator</a>
              </li>
              <li>
                <a href="#">Data monitoring</a>
              </li>
            
            </ul>
          </div>
          
        </div>
      </Container>
    </footer>
  );
}
