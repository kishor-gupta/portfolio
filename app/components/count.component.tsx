"use client";
import React, { useState } from 'react'

function CountComponent() {
    const [clientCount] = useState(700);

    return (
        <div>
            <span className="block text-4xl font-bold text-brand-primary">
                {clientCount}+
            </span>
            <span className="text-brand-muted">Line of Code</span>
        </div>
    )
}

export default CountComponent
