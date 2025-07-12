import React from 'react';

export default function Blog() {
  return (
    <>
      <h1>Top Products</h1>
      <div className="product">
        <div className="container">
          <div className="product-main">
            <div className="img1">
              <img src="/img/p1.png" alt="Product 1" />
              <img src="/img/p2.png" alt="Product 2" />
              <img src="/img/p3.png" alt="Product 3" />
              
            </div>
            <div className="img2">
              <img src="img/p4.png" alt="Product 4" />
              <img src="img/p5.png" alt="Product 5" />
              <img src="img/p6.png" alt="Product 6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
