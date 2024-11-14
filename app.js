import { db, collection, addDoc, onSnapshot, Timestamp, deleteDoc, doc,query,orderBy } from "./firebase.js";

let addDocument = async () => {
    try {
        let todo_input = document.getElementById("todo_input");
        const docRef = await addDoc(collection(db, "Todos"), {
            value: todo_input.value,
            time: Timestamp.now()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.log("Error adding document: ", error);
    }
};

let button = document.getElementById("add-button");
button.addEventListener("click", addDocument);

let getTodo = () => {
    const q = query(collection(db, "Todos"),orderBy("time","desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot)=> {
        let todoList = document.getElementById("todo-list");
        todoList.innerHTML = ''; // Clear the list before re-rendering

        querySnapshot.forEach((doc) => {
            console.log(doc.data().time);
            todoList.innerHTML += `
                <li class='todo-item' data-id="${doc.id}">
                    <span class='task-text'>${doc.data().value}</span>
                    <button class='delete-button'>Completed</button>
                </li>`;
        });

        // Attach event listeners to the delete buttons
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach((button) => {
            button.addEventListener('click', async (event) => {
                // Get the document ID of the todo item
                const todoId = event.target.closest('.todo-item').getAttribute('data-id');
                console.log('Deleting document with ID:', todoId);

                try {
                    // Use the correct docRef for deletion
                    const docRef = doc(db, "Todos", todoId);
                    await deleteDoc(docRef); // Delete the document with the corresponding ID
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Task Completed Succesfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                } catch (error) {
                    console.log("Error deleting document: ", error);
                }
            });
        });

        
    });
};
getTodo();



    

