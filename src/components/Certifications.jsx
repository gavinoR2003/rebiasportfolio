import React, { useState } from 'react';

function Certifications() {
  const [previewImage, setPreviewImage] = useState(null);

  const openPreview = (imageSrc) => setPreviewImage(imageSrc);
  const closePreview = () => setPreviewImage(null);

  const certifications = [
    {
      id: 1,
      title: 'Certificate of Participation ',
      issuer: 'Consolatrix College of Toledo City',
      date: 'September 17, 2022',
      description: 'Certificate of participation for participating in the College of Computer Studies seminar exhibit with the topic entitled "Introduction to UI/UX Designing".',
      image: '/cert1.png'
    },

  ];

  return (
    <section className="section" id="certifications">
      <div className="container">
        <h2>Certifications & Trainings</h2>
        <div className="row">
          {certifications.map(cert => (
            <div className="col-md-4 mb-4" key={cert.id}>
              <div className="card h-100">
                <button type="button" className="image-button" onClick={() => openPreview(cert.image)}>
                  <img src={cert.image} className="card-img-top" alt={cert.title} />
                </button>
                <div className="card-body">
                  <h5 className="card-title">{cert.title}</h5>
                  <p className="card-text">
                    <strong>Issuer:</strong> {cert.issuer}<br />
                    <strong>Date:</strong> {cert.date}<br />
                    <br />
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {previewImage && (
        <div className="lightbox-overlay" onClick={closePreview}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={previewImage} alt="Certificate preview" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;