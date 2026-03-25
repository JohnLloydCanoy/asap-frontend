"use client";

import React, { useState } from 'react';

const BetaAlertDialog = ({ supportEmail = "canoy.john812@gmail.com" }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        
    );