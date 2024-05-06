

function BotsButton({ id, onDelete }) {
    function handleClick() {
        fetch(`http://localhost:3000/bots/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            onDelete(id);
        })
        
    }

    return (
        <button onClick={handleClick} className="btn btn-danger">Delete</button>
    )
    }

        export default BotsButton;