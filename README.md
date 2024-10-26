# Factored Employee Management System

Welcome to the Factored Employee Management System! This application allows you to log in, view employee profiles, and explore skills with interactive charts. You don't need any programming knowledge to get started—just follow these simple steps.

## Table of Contents
1. [Requirements](#requirements)
2. [Setup Instructions](#setup-instructions)
3. [Using the Application](#using-the-application)
4. [Stopping the Application](#stopping-the-application)
5. [Technical Details (optional)](#technical-details-optional)
6. [Contact](#contact)

---

## Requirements

- **Docker**: Please install Docker on your machine from [Docker's official website](https://www.docker.com/get-started). Docker will handle everything, so you don’t have to worry about technical details.

---

## Setup Instructions

1. **Clone the Project**

   - Open your terminal (or Command Prompt on Windows) and type:

     ```bash
     git clone https://github.com/AlejandroSalas1143/full-stack-test
     ```

2. **Navigate to the Project Folder**

   - Open your terminal and navigate to the project folder. Replace `project-folder-name` with the actual name of the folder where the files are located:

     ```bash
     cd project-folder-name
     ```

3. **Start the Application Using Docker**

   - In the terminal, run the following command:

     ```bash
     docker-compose up --build
     ```

   - **Wait a few minutes** as Docker downloads the necessary files and sets up the application. You’ll see messages in the terminal; once setup completes, the application will be ready.

---

## Using the Application

1. **Access the Application in Your Browser**

   - Once the setup is complete, open your browser and go to:

     - **Frontend**: [http://localhost:5173](http://localhost:5173)
       
2. **Log In**

   - **Log In**: Use the provided username and password to log in.

3. **Explore Employee Profile**

   - After logging in, you’ll be redirected to an employee profile page with details such as:
     - **Name** and **Position**
     - **Skills Radar Chart**: Visualize skills as a radar chart.

---

## Stopping the Application

1. **Stop the Application**:

   - In the terminal window where Docker is running, press `CTRL + C` to stop the application.

2. **Fully Shut Down Docker Services**:

   - If you want to stop all Docker services associated with this project, type:

     ```bash
     docker-compose down
     ```

---

## Technical Details

- **Frontend**: Built with React and styled using Tailwind CSS.
- **Backend**: Powered by FastAPI, with a cloud-hosted database.
- **Database**: MySQL database hosted on Google Cloud, preloaded with sample employee data.
- **Docker**: Both frontend and backend services are containerized for easy deployment.

---

## Sample User Credentials

Use one of these credentials to log in:

- **Username**: `alejandrosalas`  
  **Password**: `prueba123`

- **Username**: `andreagon`  
  **Password**: `Password123`
