"use client";

import React, { useState } from 'react';

const BetaAlertDialog = ({ supportEmail = "canoy.john812@gmail.com" }) => {
    const [isOpen, setIsOpen] = useState(true);

