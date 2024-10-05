import img from '../images/test.png'
export const Testmonial= () => {
    return(
        <div className="h-auto flex flex-col justify-center items-center test-bg p-12">
  <div className="text-center">
    <img src={img} className="w-4 h-4 mx-auto" />
  </div>
  <p className="text-lg text-gray-600 mt-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.
  </p>
  <h2 className="text-2xl font-bold mt-4">John Doe</h2>
</div>
    )
}