
function Index({ setTicketType, ticketType }) {
    const statusData = [
        {
            "name": "All",
            "id": 0,
        },
        {
            "name": "Resolved",
            "id": 1,
        },
        {
            "name": "Open",
            "id": 2,
        }
    ]
    return (
        <div
            className="flex w-full items-center overflow-x-auto overflow-y-hidden scroll-smooth"
            id="journal-scroll"
        >
            <div className="max-w-[540px] min-w-[540px] w-full flex items-center">
                <div className="border-zinc-300 border-b-[1px]">
                    {statusData.map((item, idx) => {
                        return (
                            <button
                                key={item?.id}
                                onClick={() => {
                                    setTicketType(item?.id)
                                    // setTotalDataCount(item?.count)
                                    // setDataCountAfterPaging(item?.count)
                                    // setPage(0)
                                    // setPageLoader(true)
                                }}
                                className={`${ticketType == item?.id
                                    ? "border-black border-b-2 text-black font-bold"
                                    : "text-zinc-600 font-normal"
                                    } ${idx == 0 ? "px-2" : "mx-2"} leading-3 cursor-pointer pb-3 text-xs `}
                            >
                                <div className="flex text-base">
                                    <p>{item?.name}</p>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}

export default Index
