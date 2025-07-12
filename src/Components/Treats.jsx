import React from 'react';

export default function Treats() {
  return (
    <>
      <h1>Featured Treats</h1>
      <div className="treats">
        <div className="container">
          <div className="treats-main">
            <div className="t-img1">
              <img src="img/t1.png" alt="Puff Pastry" />
              <p>Puff Pastry</p>
              <p>$8</p>
            </div>
            <div className="t-img2">
              <img src="/img/t2.png" alt="Doughnuts" />
              <p>Doughnuts</p>
              <p>$8</p>
            </div>
            <div className="t-img3">
              <img src="/img/t3.png" alt="Brownies" />
              <p>Brownies</p>
              <p>$8</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
