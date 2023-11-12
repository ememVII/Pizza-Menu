import Button from "./Button"

function Footer() {
  const hour = new Date().getHours()
  const openHour = 8
  const closeHour = 22

  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <>
      <p className="text-center text-sm leading-8 mt-5">
        {isOpen ? (
          <>
            We're open from 8:00 a.m. to 10:00 p.m. ⏳ <br />
            Come visit us 🍕, or Order online now 👇🏻
          </>
        ) : (
          <>
            We're close now 😢. <br/>
            Our working time from 8:00 a.m. to 10:00 p.m. ⏳
          </>
        )}
      </p>
      
      <Button/>
      
      
    </>
  )
}

export default Footer
