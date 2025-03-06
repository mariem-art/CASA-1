
import '../CSS.Components/Foo.css';
import ImaFoo from '../Footer.png'


function Foo() {
  return (
    <div className="Footer">
          <div className="Section-image-Footer">
              <img src={ImaFoo} className="ImaFoo" alt="Image" />
          </div>
    <h6>© 2020 Kasa. All rights reserved</h6>     
    </div>
  );
}
export default Foo;