import React, { useState } from 'react';

function OJT() {
  const certificateImage = '/sample.jpg';
  const [previewOpen, setPreviewOpen] = useState(false);

  const openPreview = () => setPreviewOpen(true);
  const closePreview = () => setPreviewOpen(false);

  return (
    <section className="section bg-light" id="ojt">
      <div className="container">
        <h2>OJT / Internship</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Mayor's Office</h5>
                <h6 className="card-subtitle mb-2 text-muted">Encoder/Printer/Digital Designer</h6>
                <p className="card-text">
                  <strong>Duration:</strong> November 2 , 2025- [End Date]<br />
                  <strong>Completion Certificate:</strong>
                </p>

                <button type="button" className="image-button" onClick={openPreview}>
                  <img
                    src={certificateImage}
                    alt="OJT completion certificate"
                    className="certificate-thumb"
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {previewOpen && (
        <div className="lightbox-overlay" onClick={closePreview}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={certificateImage} alt="OJT completion certificate" />
          </div>
        </div>
      )}
    </section>
  );
}

export default OJT;