import img from '../images/welcome.png'
export const Welcome = () => {
    return(
 <div className='h-auto mb-4'>
           <div className="grid grid-cols-2 gap-4">
  <div className="col-span-1">
    <img src={img} className="w-full  object-cover" />
  </div>
  <div className="col-span-1">
    <h1 className="text-3xl font-bold">Welcome to Hostipal</h1>
<h1>Best Care for Your
Good Health</h1>
<ul>
    <li>A Passion for Healing</li>
    <li>All our best</li>
    <li>Always Caring</li>
    <li>5-Star Care</li>
    <li>Believe in Us</li>
    <li>A Legacy of Excellence</li>
</ul>
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
     Velit nascetur proin massa in. Consequat faucibus 
     porttitor enim et.</p>
     <p>
     Lorem ipsum dolor sit amet, 
     consectetur adipiscing elit. Quisque
      placerat scelerisque. Convallis felis vitae 
      tortor augue. 
     Velit nascetur proin massa in.
     </p>
</div>
  </div>
</div>
 </div>
    )
}