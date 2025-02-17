# 📌 **To-Do List Project**

## 📜 **Introduction**
This is a **To-Do List** application divided into two sections:
1. **Daily To-Do List**
2. **Weekly To-Do List**

Built with **HTML, CSS, and JavaScript**, applying **SOLID principles** for clean, maintainable, and scalable code.

---
## 🎯 **Features**
✅ Add, edit, delete, and mark tasks as completed.
✅ Store tasks permanently in **Local Storage**.
✅ Responsive design with modern UI.
✅ Two separate task lists (Daily & Weekly).
✅ Implemented using **Object-Oriented Programming (OOP)** principles.

---
## 🏗 **Project Structure**
```
📂 project-folder
 ├── 📄 index.html        # Main HTML file
 ├── 📜 styles.css        # Styling and UI improvements
 ├── 📜 script.js         # JavaScript logic
 ├── 📜 README.md         # Project documentation
```

---
## 🔹 **SOLID Principles in Action**

### ✅ **1. Single Responsibility Principle (SRP)**
- `StorageHandler.js`: Manages Local Storage.
- `TaskManager.js`: Handles task operations.
- `UIHandler.js`: Updates and manages the UI.

### ✅ **2. Open/Closed Principle (OCP)**
- The project is **open for extension but closed for modification**, allowing easy addition of new features.

### ✅ **3. Liskov Substitution Principle (LSP)**
- `Task` class is **extendable**, allowing features like `PriorityTask` without breaking the system.

### ✅ **4. Interface Segregation Principle (ISP)**
- Each class has a **single responsibility**, preventing unnecessary dependencies.

### ✅ **5. Dependency Inversion Principle (DIP)**
- `TaskManager` **interacts with `StorageHandler`** rather than directly using `localStorage`, ensuring flexibility.

---
## 📦 **Local Storage Implementation**
🔹 Tasks are stored as JSON objects:
```json
{
    "text": "Complete the project",
    "completed": false,
    "editing": false
}
```
🔹 Daily tasks are stored under `dailyTasks`, and weekly tasks under `weeklyTasks` in **Local Storage**.

---
## 🎨 **User Interface (UI)**
- Lists displayed **side by side** using Flexbox.
- Smooth animations and **interactive UI elements**.
- **Consistent color coding** for different actions.

---
## 🚀 **Future Enhancements**
📌 Sync tasks with a database (Firebase).
📌 Add task categorization based on priority (Low, Medium, High).
📌 Implement a **Dark Mode** for better UX.

---
## 💡 **How to Run the Project**
1. Clone the repository:
   ```sh
   git clone https://github.com/Bahaa65/todo-list.git
   ```
2. Open `index.html` in any browser.
3. Start adding your tasks!

---
## 🛠 **Technologies Used**
- **HTML** for structure.
- **CSS** for styling.
- **JavaScript (ES6+)** for functionality.

📌 **This project is built for an enhanced user experience with maintainable and well-structured code!** 🎯🔥

