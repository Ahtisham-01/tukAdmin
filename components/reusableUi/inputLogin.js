import React, { useRef } from "react"

const InputLogin = ({
    changeHandler,
    label,
    value,
    placeholder,
    type,
    required,
    setModal,
    maxLength,
    minLength,
    inputHeight
}) => {
    const inputRef = useRef(null)

    const buttonHandler = (e) => {
        const el = inputRef.current
        const button = e.target
        if (el) {
            el.type = el.type === "password" ? "text" : "password"
            if (button) {
                button.innerText = el.type === "password" ? "Show" : "Hide"
            }
        }
    }

    return (
        <div className="flex flex-col relative max-w-[395px] pb-3">
            <label className=" text-zinc-800 text-sm leading-[14px] font-medium manrope_font pb-3">
                {label}
            </label>
            <input
                ref={inputRef}
                placeholder={placeholder}
                className={`${type == "number" && ""} ${
                    inputHeight
                        ? `${inputHeight} rounded px-3 py-3 text-sm `
                        : "rounded-lg px-6 py-4 text-base tracking-normal"
                }
				outline-none text-zinc-500 bg-white border tracking-normal leading-[100%] border-zinc-200 placeholder:placeholder-zinc-400 focus:border-zinc-800 h-12 manrope_font`}
                onChange={changeHandler}
                value={value}
                type={type ? type : "text"}
                required={required ? required : false}
                maxLength={maxLength ? maxLength : 10000}
                min={minLength ? minLength : 0}
            />
            {type === "password" && (
                <button
                    onClick={(e) => {
                        setModal ? setModal(true) : buttonHandler(e)
                    }}
                    type="button"
                    className={`absolute leading-5 right-6 tracking-normal font-medium text-zinc-600 text-xs ${
                        inputHeight ? "top-9" : "top-[42px] "
                    }`}
                >
                    {setModal ? "Edit" : "Show"}
                </button>
            )}
        </div>
    )
}

export default InputLogin
