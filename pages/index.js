/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import MainLayout from "../src/components/layouts/MainLayout";

const Nav = styled.nav`
  background-color: #000;
  height: 80px;
  color: #fff;
  font-size: 24px;
`;

const index = () => {
  return (
    <MainLayout title="Home">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/slide/food1.jpg"
              className="d-block w-100"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/slide/food2.jpg"
              className="d-block w-100"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/slide/food3.jpg"
              className="d-block w-100"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <h2 className="mt-5 mb-4">หน้าหลัก</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, aut
          omnis suscipit animi laborum fuga nostrum earum molestiae sequi iusto
          cupiditate? Cupiditate magni debitis fugiat dolore odio ut, pariatur
          nesciunt minima inventore molestias minus perferendis rem esse amet
          illo officiis repudiandae voluptas quidem cumque aperiam iusto
          corrupti nisi consectetur nemo. Molestias omnis adipisci maiores
          accusamus eligendi numquam eaque aspernatur ex, nisi natus vero
          laboriosam ut repellat a impedit, amet et consequuntur reiciendis.
          Illum recusandae incidunt reiciendis veniam earum similique commodi,
          voluptatem nulla illo ut quam, voluptate, quaerat rem ratione enim?
          Quidem dignissimos sequi ipsa, consectetur nostrum sit obcaecati
          voluptatum fugiat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          reprehenderit velit quibusdam delectus nesciunt ut dignissimos! Modi
          autem ratione molestias aliquid perspiciatis delectus magni vero quod
          dicta ducimus, fugiat quisquam aliquam molestiae eaque pariatur quasi
          placeat at voluptates? Alias similique laudantium sunt asperiores eius
          placeat dolores quos modi maxime voluptatem. Reprehenderit deserunt
          dolor aliquam labore ducimus, rerum velit incidunt voluptas fugiat,
          neque totam voluptates impedit veritatis ipsam possimus culpa sapiente
          architecto. Quisquam molestiae vero similique maxime facilis
          voluptatum magnam consequuntur animi sunt quos temporibus
          reprehenderit quidem assumenda aut, dignissimos voluptatibus accusamus
          mollitia blanditiis autem dolor, expedita quas ad nemo magni!
        </p>
      </div>
    </MainLayout>
  );
};

export default index;
