import React from "react";

export interface SwitchProps extends React.HTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
                                           disabled = false,
                                           className = "",
                                           children,
                                           ...other
                                       }) => {
    const disabledClass = disabled ? "cursor-not-allowed pointer-events-none opacity-75" : "cursor-pointer";
    const baseSwitchClass = `w-11 h-6 bg-mantle rounded-full peer peer-checked:bg-green peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all`;
    const sliderClass = `${className} ${baseSwitchClass}`;

    return (
        <label className={`relative inline-flex items-center ${disabledClass}`}>
            <input type="checkbox" value="" disabled={disabled} className="sr-only peer" {...other}/>
            <div className={`${baseSwitchClass}`}></div>
            <span className="ml-3 text-sm font-medium text-text">{children}</span>
        </label>
    );
};

export default Switch;

Switch.displayName = "Switch";
