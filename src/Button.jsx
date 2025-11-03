
function printHello(){
    console.log("Button was clicked");
}

function bye(){
    console.log("Bye");
}

function handleDblClick(){
    console.log("Button was double clicked")
}
function Button(){
    return (
        <div>
            <button onClick={printHello}>Click Me !</button>
            <p onMouseOver = {bye}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quia distinctio dignissimos nisi eius officiis laboriosam, recusandae enim cumque neque ratione sint numquam deleniti vel, illum, qui facere rem veniam?
            </p>

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora magni, esse qui autem d oloribus optio repellat harum deserunt. Ipsam error quos repellendus quia sint quas neque nihil nesciunt hic cumque magnam excepturi facere fugit maiores, animi provident labore quidem pariatur dolore dolores reiciendis. Doloremque rem aliquid officiis tempore pariatur placeat autem, harum libero velit quod repudiandae expedita sunt labore ratione maxime perferendis dolore accusantium id minus non beatae modi nesciunt incidunt. Reiciendis assumenda cupiditate adipisci a voluptas exercitationem dolores nesciunt sequi, quas molestiae eligendi laudantium provident libero dignissimos voluptatum voluptatibus quis repellendus ex incidunt excepturi harum quos itaque consectetur! Voluptatum?
            </p>
            <button onDoubleClick={handleDblClick}>
                Double click me!
            </button>
        </div>
    )
}

export default Button;