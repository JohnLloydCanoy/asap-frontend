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
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                >
                {/* Header Area */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500">

                {/* Alert Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
