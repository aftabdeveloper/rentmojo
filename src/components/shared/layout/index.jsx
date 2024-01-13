import {Link} from "react-router-dom"
const Layout = ({children})=>{
    const rentoMojos = [
        {
            label: "about us",
            path: "/about-us"
        },
        {
            label: "culture",
            path: "/culture"
        },
        {
            label: "investor",
            path: "/investor"
        },
        {
            label: "careers",
            path: "/careers"
        },
        {
            label: "contact",
            path: "/contact"
        },
        {
            label: "our benefit",
            path: "our-benefit"
        },
        {
            label: "sitemap",
            path: "sitemap"
        },
        {
            label: "landlords",
            path: "landlords"
        }
    ]

    const informations = [
        {
            label: "blog",
            path: "/blog"
        },
        {
            label: "support home",
            path: "/support-home"
        },
        {
            label: "documents required",
            path: "/documents-required"
        },
        {
            label: "annual returns",
            path: "/annual-returns"
        }
    ]

    const policies = [
        {
            label: "shipping policy",
            path: "/shipping-policy"
        },
        {
            label: "cancellation & returns",
            path: "/cancellation-returns"
        },
        {
            label: "privacy policy",
            path: "/privacy-policy"
        },
        {
            label: "rental terms & conditions",
            path: "/term-conditions"
        },
        {
            label: "referral terms & conditions",
            path: "/referral"
        }
    ]
    return (
        <>
            <nav className="w-full fixed top-0 z-50 flex justify-around py-3 px-[10%] items-center shadow-lg bg-white">
                  <img src="./images/logo.svg" />  
                  <div className="flex items-center gap-2">
                    <span>Banglore</span>
                    <i className="fa fa-angle-down"></i>
                  </div>
                  <input placeholder=" Search for products" className="outline-none w-[50%] px-[8px] py-[10px] bg-[#F5F7FA] border rounded-lg hover:bg-white transition duration-700"/>
                  <div className="flex gap-2 items-center text-lg">
                    <i className="fa fa-shopping-cart"></i>
                    <span>Cart</span>
                  </div>
                  <button className="bg-[#F90102] py-[8px] px-[12px] rounded-lg border text-white hover:bg-white hover:border-red-500 hover:text-[#F90102]">LOGIN / SIGNUP</button>
            </nav>
            <section className="p-20 relative">
              <h1>{children}</h1>
            </section>
            <footer className="bg-[#F5F7FA] px-[10%] py-5">
               <div className="flex flex-col gap-1">
                <h1 className="text-sm text-[#787979]">Enjoy An Upgraded Lifestyle In Bangalore City On A Budget With RentoMojo!</h1>
                <div className="flex flex-col gap-8 text-xs text-zinc-400">
                    <p>RentoMojo is a leading rental company with a pan-India presence. We offer furniture, appliances, and electronics on rent in Bangalore at an affordable monthly fee. When you choose to rent from us instead of buying from a store, you get to use the best products in the market and still save money!</p>
                    <p>Whether you have a home in Bangalore or have just rented a room here, you’ll find everything you need on our website. We offer top-quality furniture, appliances, and electronics, made by the most dependable, in-demand brands around. If you choose to rent from us, you will receive multiple rewards like free maintenance, free relocation, and damage waiver.</p>
                    <p>RentoMojo makes it effortless for you to rent from us. All you need to do is pick out the products you like, add them to your cart, and then check out. Our team will deliver your rental items directly to your home and also install them for you. We offer fast delivery to all parts of Bangalore, including locations such as Bangalore Bazaar, Malleswaram, Doorvavinagar, Bangalore Sub Foreign Post, and Agara.</p>
                </div>
                </div>
                <div className="flex justify-between py-[5%]">
                <div className="flex flex-col gap-4">
                    <h1 className="text-zinc-700">RENTOMOJO</h1>

                    <ul className="flex flex-col gap-3">
                        {
                            rentoMojos.map((rentoMojo,index)=>(
                              <li className="w-fit flex flex-col text-zinc-600 text-sm capitalize hover:border-b hover:border-y-zinc-600" key={index}>
                                <Link to={rentoMojo.path}>{rentoMojo.label}</Link>
                              </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-zinc-700">INFORMATIONS</h1>

                    <ul className="flex flex-col gap-3">
                        {
                            informations.map((information,index)=>(
                              <li className="w-fit flex flex-col text-zinc-600 text-sm capitalize hover:border-b hover:border-y-zinc-600" key={index}>
                                <Link to={information.path}>{information.label}</Link>
                              </li>
                        ))
                    }
                    </ul>
                </div>
                 <div className="flex flex-col gap-4">
                    <h1 className="text-zinc-700">POLICIES</h1>

                    <ul className="flex flex-col gap-3">
                        {
                            policies.map((policy,index)=>(
                              <li className="w-fit flex flex-col text-zinc-600 text-sm capitalize hover:border-b hover:border-y-zinc-600" key={index}>
                                <Link to={policy.path}>{policy.label}</Link>
                              </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                <h1 className="text-zinc-700">NEED HELP ?</h1>
                <div className="flex items-center">
                    <i className="fa fa-share"></i>
                    <Link><span className="text-zinc-500">jo@rentomojo.com</span></Link>
                </div>
                <h1 className="text-zinc-700 font-semibold">DOWNLOAD APP</h1>
                <div className="flex gap-2">
                    <img src="./images/google-play.svg" alt="google play" className="w-[120px]" />
                    <img src="./images/app-store.svg" alt="app-store" className="w-[120px]" />
                </div>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Layout