"use client";

import React, { useState } from 'react';

const BetaAlertDialog = ({ supportEmail = "canoy.john812@gmail.com" }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title"
        >
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 border border-gray-200">
            
            {/* Header Area */}
            <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600">
                {/* Alert Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>
            <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
                Welcome to ASAP (Beta)
            </h2>
            </div>

            {/* Body Content */}
            <div className="mb-6 text-gray-600 text-sm leading-relaxed space-y-3">
            <p>
                We are thrilled to have you here! Please note that the Automated Social Analytics Platform is currently in active development. 
            </p>
            <p>
                While we are working hard to stabilize the system, you may occasionally encounter bugs, unexpected behaviors, or features that are still being polished.
            </p>
            <p className="font-medium text-gray-900">
                Found a bug or have feedback? <br/>
                Let us know at: <a href={`mailto:${supportEmail}`} className="text-blue-600 hover:underline">{supportEmail}</a>
            </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-2">
            <button 
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-200"
            >
                I Understand, Continue
            </button>
            </div>

        </div>
        </div>
    );
};

export default BetaAlertDialog;