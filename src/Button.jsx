
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
            <button onDoubleClick={handleDblClick}>
                Double click me!
            </button>
        </div>
    )
}

export default Button;