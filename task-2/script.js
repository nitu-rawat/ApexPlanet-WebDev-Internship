// --- PART 1: CONTACT FORM VALIDATION ---
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(event) {
    // Preventing the page from reloading on form submit
    event.preventDefault();
    
    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    
    // Check if fields are empty
    if (nameValue === "" || emailValue === "") {
        formMessage.textContent = "Error: All fields are required!";
        formMessage.style.color = "#e84118"; // Red text
        return;
    }
    
    // Simple email format check using standard index check
    if (!emailValue.includes('@') || !emailValue.includes('.')) {
        formMessage.textContent = "Error: Please enter a valid email address!";
        formMessage.style.color = "#e84118";
        return;
    }
    
    // If everything is correct, display success text in English
    formMessage.textContent = "Success: Form submitted successfully!";
    formMessage.style.color = "#4cd137"; // Green text
    
    // Reset form fields
    contactForm.reset();
});


// --- PART 2: DYNAMIC TO-DO LIST ---
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', function() {
    const taskText = todoInput.value.trim();
    
    // Don't add empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    // 1. Create a new list item (li) dynamically
    const li = document.createElement('li');
    li.textContent = taskText;
    
    // 2. Create a delete button for this task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    
    // 3. Add delete logic to the button
    deleteBtn.addEventListener('click', function() {
        li.remove(); // Removes this specific task item from the list
    });
    
    // 4. Attach the delete button to the li, and li to the ul list
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    
    // Clear input box
    todoInput.value = "";
});