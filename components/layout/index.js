import React from "react"
import Navigation from "../reusableUi/navigation"

const Index = ({ children, nav }) => {
    return (
        <section className="flex w-full justify-between relative">
            <Navigation nav={nav} />
            <main
                className={`${
                    nav && ""
                } max-w-[1180px] w-full main-section  bg-[#E5E5E5] `}
            >
                <div className="w-full mx-auto">{children}</div>
            </main>
            <style>
                {`
				@media screen and (min-width: 900px) {
					.main-section {
						max-width: ${nav ? "calc(100% - 16rem)" : "100%"};
					}
				} 
				`}
            </style>
        </section>
    )
}

export default Index
