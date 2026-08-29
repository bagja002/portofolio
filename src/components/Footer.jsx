import React from 'react';

export default function Footer() {
    return (
        <footer className="border-t border-rule py-8">
            <div className="term flex flex-col gap-2 text-[0.8125rem] text-dim sm:flex-row sm:items-center sm:justify-between">
                <p>
                    <span className="text-amber">$</span> exit — © {new Date().getFullYear()} Bagja Lazwardi
                </p>
                <p className="tnum">react · tailwind · github pages</p>
            </div>
        </footer>
    );
}
