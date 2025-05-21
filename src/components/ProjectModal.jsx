// src/components/ProjectModal.js
import React, { useEffect } from 'react';

const ProjectModal = ({ title, description, image, show, onClose }) => {
  useEffect(() => {
    if (show && window.bootstrap) {
      const modal = new window.bootstrap.Modal(document.getElementById('projectModal'));
      modal.show();

      // إغلاق المودال عند انتهاءه
      const modalEl = document.getElementById('projectModal');
      modalEl.addEventListener('hidden.bs.modal', onClose);
    }
  }, [show, onClose]);

  return (
    <div className="modal fade" id="projectModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {image && <img src={image} alt={title} className="img-fluid rounded mb-3" />}
            <p>{description}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
