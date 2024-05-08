

function BotsButton({ id, onDelete }) {
    function handleClick() {
        fetch(`https://code-challeng-2-bot-battlr.onrender.com/bots/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            onDelete(data);
        })
        
    }

    return (
        <button onClick={handleClick} className="btn btn-danger">Delete</button>
    )
    }

        export default BotsButton;