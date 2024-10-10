
import backgroundImage from '../assets/contactsassets/contact.png'
const Contacts = () => {
  return (
    <>
     <div>
        {/* <img src={backgroundImage} alt="" /> */}
        <div className="bg-cover bg-center h-auto" style={{backgroundImage:`URL(${backgroundImage})`}}>
            <p>Home / Contact</p>
            <h3>Our Contacts</h3>
        </div>
        <div>
            {/* <img src={} alt="" /> */}
        </div>
     </div> 
    </>
  )
}

export default Contacts
