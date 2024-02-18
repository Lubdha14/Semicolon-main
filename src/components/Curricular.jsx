import React from 'react';

function Curricular() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Extra Activities</h1>
      <section style={{ marginBottom: '20px' }}>
        <h2>Singing</h2>
        <div style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth' }}>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID1"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Singing Video 1</p>
          </div>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID2"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Singing Video 2</p>
          </div>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID1"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Singing Video 3</p>
          </div>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID1"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Singing Video 4</p>
          </div>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID1"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Singing Video 5</p>
          </div>
          {/* Add more videos for singing */}
        </div>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2>Dancing</h2>
        <div style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth' }}>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID3"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Dancing Video 1</p>
          </div>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Dancing Video 2</p>
          </div>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID3"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Dancing Video 3</p>
          </div>
          {/* Add more videos for dancing */}
        </div>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>C programming</h2>
        <div style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth' }}>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID5"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Basic Concept</p>
          </div>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID6"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Array</p>
          </div>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID5"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Pointers</p>
          </div>
          {/* Add more programming videos */}
        </div>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Sports</h2>
        <div style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth' }}>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID5"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Sports Video 1</p>
          </div>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID6"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Sports Video 2</p>
          </div>
          <div style={{ marginRight: '10px' }}>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID5"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Sports Video 3</p>
          </div>
          {/* Add more videos for sports */}
        </div>
      </section>
      {/* Add more sections for other activities */}
    </div>
  );
}

export default Curricular;
