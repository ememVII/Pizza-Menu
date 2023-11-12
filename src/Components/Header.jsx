function Header() {
    return (
        <div className="header w-full mt-1 flex flex-col justify-center items-center text-center gap-12">
            <h1 className="text-[3.2rem] font-light text-pizzaHeader relative tracking-wide uppercase w-full">fast react pizza co.</h1>
            
            <h3 className="menu uppercase font-medium text-[1.5rem] tracking-widest relative w-fit">our menu</h3>

            <p className="w-4/5 tracking-wider leading-6 text-[1rem]">
                Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
            </p>
        </div>
    )
}

export default Header
