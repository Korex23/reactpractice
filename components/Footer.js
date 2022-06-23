export const Footer = () => {
  return (
    <footer
      className=" text-success text-center text-lg-start "
      style={{ marginTop: "100px" }}
    >
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0 text-white">Footer Content</h5>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0 text-white">Links</h5>
            <p className="text-white">Home</p>
            <p className="text-white">About Us</p>
            <p className="text-white">Product</p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0 text-white">Contact</h5>
            <p>
              <i className="bi bi-telephone-plus text-white"> +2348135241358</i>
            </p>
            <p>
              <i className="bi bi-envelope text-white"> soilless@gmail.com</i>
            </p>
            <p>
              <i className="bi bi-geo-alt text-white"> Ikeja,Lagos,Nigeria</i>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
