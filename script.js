class StorageHandler {
    static getTasks(listName) {
        try {
            return JSON.parse(localStorage.getItem(listName)) || [];
        } catch (error) {
            console.error(`Error parsing ${listName} from localStorage:`, error);
            return [];
        }
    }

    static saveTasks(listName, tasks) {
        localStorage.setItem(listName, JSON.stringify(tasks));
    }
}

class Task {
    constructor(text, completed = false, editing = false) {
        this.text = text;
        this.completed = completed;
        this.editing = editing;
    }
}

class TaskManager {
    constructor(listName) {
        this.listName = listName;
        this.tasks = StorageHandler.getTasks(this.listName);
    }

    addTask(taskText) {
        if (!taskText.trim()) return;
        this.tasks.push(new Task(taskText));
        this.updateStorage();
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.updateStorage();
    }

    toggleComplete(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.updateStorage();
    }

    showEditInput(index) {
        this.tasks[index].editing = true;
        this.updateStorage();
    }

    saveEdit(index, newText) {
        if (newText.trim()) {
            this.tasks[index].text = newText;
            this.tasks[index].editing = false;
            this.updateStorage();
        }
    }

    cancelEdit(index) {
        this.tasks[index].editing = false;
        this.updateStorage();
    }

    updateStorage() {
        StorageHandler.saveTasks(this.listName, this.tasks);
        UIHandler.renderTasks(this.listName);
    }
}

class UIHandler {
    static weeklyTasksManager = new TaskManager("weeklyTasks");
    static dailyTasksManager = new TaskManager("dailyTasks");

    static init() {
        document.getElementById("addWeeklyTaskBtn").addEventListener("click", () => {
            const taskInput = document.getElementById("weeklyTaskInput");
            UIHandler.weeklyTasksManager.addTask(taskInput.value);
            taskInput.value = "";
            UIHandler.renderTasks("weeklyTasks");
        });

        document.getElementById("addDailyTaskBtn").addEventListener("click", () => {
            const taskInput = document.getElementById("dailyTaskInput");
            UIHandler.dailyTasksManager.addTask(taskInput.value);
            taskInput.value = "";
            UIHandler.renderTasks("dailyTasks");
        });

        UIHandler.renderTasks("weeklyTasks");
        UIHandler.renderTasks("dailyTasks");
    }

    static renderTasks(listName) {
            const taskManager = listName === "weeklyTasks" ? UIHandler.weeklyTasksManager : UIHandler.dailyTasksManager;
            const taskList = document.getElementById(listName === "weeklyTasks" ? "weeklyTaskList" : "dailyTaskList");

            taskList.innerHTML = "";
            taskManager.tasks.forEach((task, index) => {
                        const li = document.createElement("li");
                        li.innerHTML = `
                ${task.editing 
                    ? `<input type="text" id="editInput-${listName}-${index}" value="${task.text}">
                        <button class="save" onclick="UIHandler.${listName === 'weeklyTasks' ? 'weeklyTasksManager' : 'dailyTasksManager'}.saveEdit(${index}, document.getElementById('editInput-${listName}-${index}').value)">Save</button>
                        <button class="cancel" onclick="UIHandler.${listName === 'weeklyTasks' ? 'weeklyTasksManager' : 'dailyTasksManager'}.cancelEdit(${index})">Cancel</button>`
                    : `<span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                        <button class="edit" onclick="UIHandler.${listName === 'weeklyTasks' ? 'weeklyTasksManager' : 'dailyTasksManager'}.showEditInput(${index})">EDIT</button>
                        <button class="delete" onclick="UIHandler.${listName === 'weeklyTasks' ? 'weeklyTasksManager' : 'dailyTasksManager'}.deleteTask(${index})">✖</button>
                        <button class="complete" onclick="UIHandler.${listName === 'weeklyTasks' ? 'weeklyTasksManager' : 'dailyTasksManager'}.toggleComplete(${index})">✔</button>`}
            `;
            taskList.appendChild(li);
        });
    }
}

document.addEventListener("DOMContentLoaded", UIHandler.init);