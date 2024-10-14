
**Dashboard App**

**Description:**

This React application simulates a login system and a dashboard that displays data from an API. It includes features such as:

- **Login:** Authentication with email and password.
-   **Dashboard:** Displays data in a list, with search and detailed modals.
-   **Authentication:** Remembers the user and manages session state.
-   **Error handling:** Displays clear messages in case of issues.
-   **Responsive design:** Adapts to different screen sizes.

**Technologies:**

-   **React:** JavaScript library for building user interfaces.
-   **Axios:** For making HTTP requests to the API.
-   **Tailwind CSS:** CSS framework for rapid, custom design.
-   **Lucide-react:** Icons.

**Installation and Usage:**

1.  **Clone:** `git clone https://github.com/tu_usuario/lottery-dashboard-app.git`
2.  **Install dependencies:** `npm install`
3.  **Start:** `npm start` (Access http://localhost:3000)
**Project Structure:**

```
/src
├── /components
│   ├── Dashboard.js
│   ├── DashboardCard.js
│   ├── Login.js
│   ├── RecordModal.js
│   ├── Unauthorized.js
│   ├── LoadingSpinner.js
├── /contexts
│   └── AuthContext.js 
├── App.js             
├── index.js           
├── index.css          
└── tailwind.config.js 
```


**Functionality of the application**
1. Login

The user must login with the following credentials to access the Dashboard:

    Email: prologin@prologin.com
    Password: ProLogin123456

Any other login attempt will show an error message.

2. Dashboard

Once authenticated, the user will see the Dashboard, where comments obtained from the JSONPlaceholder API are displayed. The main functionalities include:

    Search bar: Users can search for comments by keywords.
    Modal: Clicking on the “View” icon (eye icon) will open a modal showing additional details of the selected comment.
    Logout: The “Logout” button in the upper right corner allows the user to logout and return to the login page.

3. Error handling and loading

If there is an error in making the API request, a friendly error message is displayed. While feedback is being fetched, a loading spinner is displayed.

