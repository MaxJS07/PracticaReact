import React from "react";

const AccordionItem = ({ id, title, children, parentId, isOpen = false }) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}`}
                    aria-expanded={isOpen}
                    aria-controls={id}
                >
                    {title}
                </button>
            </h2>
            <div
                id={id}
                className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                data-bs-parent={`#${parentId}`}
            >
                <div className="accordion-body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AccordionItem;