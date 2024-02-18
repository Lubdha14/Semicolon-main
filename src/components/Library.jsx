import React, { useState } from 'react';

function Library() {
  const [books, setBooks] = useState([
    { id: 1, name: 'Mathematics Book', pdfUrl: '/Maths.pdf', imageUrl: '/images/maths.jpg' },
    { id: 2, name: 'Science Book', pdfUrl: '/science.pdf', imageUrl: '/images/Science.jpg' },
    { id: 3, name: 'Social Studies Book', pdfUrl: '/SocialScience.pdf', imageUrl: '/images/sst.jpg' },
    { id: 4, name: 'Language Arts Book', pdfUrl: '/Arts.pdf', imageUrl: '/images/arts.jpg' },
    { id: 5, name: 'The Apple Pie', pdfUrl: '/Applepie.pdf', imageUrl: '/images/Apple.jpg' },
    { id: 6, name: 'Baseball ABC', pdfUrl: '/Baseball ABC.pdf', imageUrl: '/images/Baseball.jpg' },
    { id: 7, name: 'The wonderful wizards', pdfUrl: '/The wonderful wizards.pdf', imageUrl: '/images/Wizards.jpg' },
    { id: 8, name: 'Language Arts Book', pdfUrl: '/Arts.pdf', imageUrl: '/images/arts.jpg' },
    { id: 9, name: 'The Apple Pie', pdfUrl: '/Applepie.pdf', imageUrl: '/images/Apple.jpg' },
    { id: 10, name: 'Baseball ABC', pdfUrl: '/Baseball ABC.pdf', imageUrl: '/images/Baseball.jpg' },
    { id: 11, name: 'The wonderful wizards', pdfUrl: '/The wonderful wizards.pdf', imageUrl: '/images/Wizards.jpg' },
    { id: 12, name: 'Maths', pdfUrl: '/Maths.pdf', imageUrl: '/images/maths.jpg' },
    { id: 13, name: 'Science part2', pdfUrl: '/science.pdf', imageUrl: '/images/Science.jpg' },
    { id: 14, name: 'Haunted House', pdfUrl: '/SocialScience.pdf', imageUrl: '/images/sst.jpg' },
    { id: 15, name: 'Language Arts Book', pdfUrl: '/Arts.pdf', imageUrl: '/images/arts.jpg' },
    { id: 16, name: 'The Apple Pie', pdfUrl: '/Applepie.pdf', imageUrl: '/images/Apple.jpg' },
    { id: 17, name: 'Baseball ABC', pdfUrl: '/Baseball ABC.pdf', imageUrl: '/images/Baseball.jpg' },
    { id: 18, name: 'The Apple Pie', pdfUrl: '/Applepie.pdf', imageUrl: '/images/Apple.jpg' },
    { id: 19, name: 'Baseball ABC', pdfUrl: '/Baseball ABC.pdf', imageUrl: '/images/Baseball.jpg' },
    { id: 20, name: 'Wizards', pdfUrl: '/The wonderful wizards.pdf', imageUrl: '/images/Wizards.jpg' },
    { id: 21, name: 'Language Arts Book', pdfUrl: '/Arts.pdf', imageUrl: '/images/arts.jpg' },
    { id: 22, name: 'The Apple Pie', pdfUrl: '/Applepie.pdf', imageUrl: '/images/Apple.jpg' },
    { id: 23, name: 'Baseball ABC', pdfUrl: '/Baseball ABC.pdf', imageUrl: '/images/Baseball.jpg' },
    { id: 24, name: 'The wonderful wizards', pdfUrl: '/The wonderful wizards.pdf', imageUrl: '/images/Wizards.jpg' },
    { id: 25, name: 'Mathematics Book', pdfUrl: '/Maths.pdf', imageUrl: '/images/maths.jpg' },
    { id: 26, name: 'Science part3', pdfUrl: '/science.pdf', imageUrl: '/images/Science.jpg' },
  

    // Add more books as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const viewPdf = (pdfUrl) => {
    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'Azure', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Study Book Library</h1>
        <input
          type="text"
          placeholder="Search by book name"
          value={searchTerm}
          onChange={handleSearch}
          style={{ width: '96%', padding: '10px', marginBottom: '20px', fontSize: '16px', borderRadius: '5px', border: '3px solid #ccc' }}
        />
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredBooks.map((book) => (
            <li key={book.id} style={{ margin: '10px', textAlign: 'center', width: '200px' }}>
              <div style={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0.1,0.1,0.1,0.5)' }}>
                <img src={book.imageUrl} alt={book.name} style={{ width: '100%', height: 'auto', borderRadius: '5px 5px 0 0' }} onClick={() => viewPdf(book.pdfUrl)} />
                <div style={{ padding: '10px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{book.name}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Library;
