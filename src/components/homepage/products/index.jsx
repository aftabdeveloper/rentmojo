const Products = ()=>{
    return (
        <>
            <div className="bg-[#F5F7FA]">
                <div className="px-[10%] py-[1%] flex justify-between items-center">
                    <div className="tex-zinc-600 text-3xl">
                    <div>
                        <h1>You'll love to</h1>
                        <h1>take these home</h1>
                     </div>
                        <div className="border-2 border-red-600 w-[50px]"></div>
                     </div>
                     <div className="flex gap-2">
                        <button className="rounded-full h-[16px] w-[16px] border border-zinc-600 p-6 text-2xl flex justify-center items-center">
                            <i className="fa fa-angle-left"></i>
                        </button>
                        <button className="rounded-full h-[16px] w-[16px] border border-zinc-600 p-6 text-2xl flex justify-center items-center">
                            <i className="fa fa-angle-right"></i>
                        </button>
                     </div>
                </div>
                <div className="px-[10%]">
                    <div className="flex">
                    <div className="w-[22%] bg-white p-5 border border-zinc-200">
                        <img src="./images/saddle-shoe-rack.jpg" alt="saddle-shoe-rack" />
                        <div className="flex flex-col gap-3">
                            <h1 className="capitalize text-lg text-zinc-600">saddle shoe rack large</h1>
                            <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span className="text-zinc-500">Rent</span>
                                <span className="flext items-center">
                                    <i className="fa fa-rupee"></i> 200
                                </span>
                            </div>
                                <button className="bg-white border border-zinc-600 rounded-lg px-5 hover:bg-zinc-600 hover:text-white">See more</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[22%] bg-white p-5 border border-zinc-200">
                        <img src="./images/rex-seater.jpg" alt="rex-seater" />
                        <div className="flex flex-col gap-3">
                            <h1 className="capitalize text-lg text-zinc-600">rex seater</h1>
                            <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span className="text-zinc-500">Rent</span>
                                <span className="flext items-center">
                                    <i className="fa fa-rupee"></i> 200
                                </span>
                            </div>
                                <button className="bg-white border border-zinc-600 rounded-lg px-5 hover:bg-zinc-600 hover:text-white">See more</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[22%] bg-white p-5 border border-zinc-200">
                        <img src="./images/stowy-2-door.jpg" alt="stowy-door" />
                        <div className="flex flex-col gap-3">
                            <h1 className="capitalize text-lg text-zinc-600">stowy door</h1>
                            <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span className="text-zinc-500">Rent</span>
                                <span className="flext items-center">
                                    <i className="fa fa-rupee"></i> 200
                                </span>
                            </div>
                                <button className="bg-white border border-zinc-600 rounded-lg px-5 hover:bg-zinc-600 hover:text-white">See more</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[22%] bg-white p-5 border border-zinc-200">
                        <img src="./images/rex-seater.jpg" alt="rex-seater" />
                        <div className="flex flex-col gap-3">
                            <h1 className="capitalize text-lg text-zinc-600">rex seater</h1>
                            <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span className="text-zinc-500">Rent</span>
                                <span className="flext items-center">
                                    <i className="fa fa-rupee"></i> 200
                                </span>
                            </div>
                                <button className="bg-white border border-zinc-600 rounded-lg px-5 hover:bg-zinc-600 hover:text-white">See more</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[22%] bg-white p-5 border border-zinc-200">
                        <img src="./images/betty-dresser.jpg" alt="betty-dresser" />
                        <div className="flex flex-col gap-3">
                            <h1 className="capitalize text-lg text-zinc-600">betty dressers</h1>
                            <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span className="text-zinc-500">Rent</span>
                                <span className="flext items-center">
                                    <i className="fa fa-rupee"></i> 200
                                </span>
                            </div>
                                <button className="bg-white border border-zinc-600 rounded-lg px-5 hover:bg-zinc-600 hover:text-white">See more</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products