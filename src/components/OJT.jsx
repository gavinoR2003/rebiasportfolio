import React, { useState } from 'react';

function Certifications() {
  const [previewImage, setPreviewImage] = useState(null);

  const openPreview = (imageSrc) => setPreviewImage(imageSrc);
  const closePreview = () => setPreviewImage(null);

  const certifications = [
    {
      id: 1,
      title: 'Certificate of Participation',
      issuer: 'Consolatrix College of Toledo City',
      date: 'September 17, 2022',
      description:
        'Certificate of participation for participating in the College of Computer Studies seminar exhibit with the topic entitled "Introduction to UI/UX Designing".',
      image: '/cert1.png'
    },
    {
      id: 2,
      title: 'OJT Documentation 1',
      issuer: 'On-the-Job Training',
      date: '2025-2026',
      description: 'On-the-job training activity documentation.',
      image: '/ojt1.jpg'
    },
    {
      id: 3,
      title: 'OJT Documentation 2',
      issuer: 'On-the-Job Training',
      date: '2025-2026',
      description: 'On-the-job training activity documentation.',
      image: '/ojt2.jpg'
    },
    {
      id: 4,
      title: 'OJT Documentation 3',
      issuer: 'On-the-Job Training',
      date: '2025-2026',
      description: 'On-the-job training activity documentation.',
      image: '/ojt3.jpg'
    },
    {
      id: 5,
      title: 'OJT Documentation 4',
      issuer: 'On-the-Job Training',
      date: '2025-2026',
      description: 'On-the-job training activity documentation.',
      image: '/ojt4.jpg'
    }
  ];

  return (
    <section className="section" id="certifications">
      <div className="container">
        <h2 className="text-center mb-4">Certifications & Trainings</h2>
        <div className="row">
          {certifications.map(cert => (
            <div className="col-md-4 mb-4" key={cert.id}>
              <div className="card h-100 shadow-sm">
                <button
                  type="button"
                  className="image-button"
                  onClick={() => openPreview(cert.image)}
                  style={{ border: "none", background: "none", padding: 0 }}
                >
                  <img
                    src={cert.image}
                    className="card-img-top"
                    alt={cert.title}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </button>
                <div className="card-body">
                  <h5 className="card-title">{cert.title}</h5>
                  <p className="card-text">
                    <strong>Issuer:</strong> {cert.issuer} <br />
                    <strong>Date:</strong> {cert.date} <br /><br />
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {previewImage && (
        <div
          onClick={closePreview}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          >
            <img
              src={previewImage}
              alt="Preview"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px"
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
