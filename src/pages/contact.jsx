export function Contact() {
    return (
      <div className="flex flex-column justify-center">
        <div className="border-2 border-stone-400 w-5/6 rounded-md p-5">
          <h1 className="text-center mb-2">Contact us using this form!</h1>
          <form className="flex flex-col gap-0.5">
            
            <label for="name">Full name: </label>
            <input type="text" name="Full Name" id="name" className="border-2 border-stone-400 rounded-md px-2 py-1" required minlength="3"></input>
  
            <label for="subject" className="">Subject: </label>
            <input type="text" name="Subject" id="subject" className="border-2 border-stone-400 rounded-md px-2 py-1" required minlength="3"></input>
  
            <label for="email" className="">Email: </label>
            <input type="email" name="Email" id="email" className="border-2 border-stone-400 rounded-md px-2 py-1" required></input>
  
            <label for="message" className="">Message: </label>
            <textarea type="text" name="Message" id="message" rows="6" className="border-2 border-stone-400 rounded-md px-2 py-1" required minlength="3"></textarea>
  
            <input type="submit" value="Submit" className="mt-3 px-2 py-2 bg-cyan-400 rounded-md w-3/4 mx-auto"></input>
          </form>
        </div>
      </div>
    )
  }