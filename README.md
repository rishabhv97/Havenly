# Havenly

Welcome to Havenly, a full-stack web application designed for users to discover, share, and review unique places to stay. This platform allows property owners to list their spaces and provides travelers with a seamless experience to find and book their next getaway.

## Live Demo

*[https://wanderlust-ea0l.onrender.com/listings]*

## Key Features

-   **User Authentication**: Secure user registration and login system built with Passport.js.
-   **Interactive Maps**: Each listing displays its location on an interactive map using the Mapbox API.
-   **Cloud Image Uploads**: Image uploads are handled by Multer and stored on the cloud using Cloudinary for optimized performance.
-   **CRUD Functionality**: Full Create, Read, Update, and Delete (CRUD) functionality for listings.
-   **Reviews and Ratings**: Users can leave ratings and comments on listings.
-   **Authorization & Security**: Robust middleware ensures that users can only edit or delete their own listings and reviews.
-   **Data Validation**: Server-side schema validation using Joi to ensure data integrity before it's saved to the database.
-   **Flash Messages**: Provides instant feedback to users for actions like successful logins, new listings, or errors.
-   **Responsive Design**: A clean and responsive user interface built with Bootstrap.

## Tech Stack

-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB (managed with MongoDB Atlas), Mongoose
-   **Frontend**: EJS, HTML5, CSS3
-   **Styling**: Bootstrap
-   **Authentication**: Passport.js (`passport-local`, `passport-local-mongoose`)
-   **File Uploads**: Multer, Cloudinary
-   **Mapping**: Mapbox API

## Local Setup and Installation

To run this project on your local machine, please follow these steps:

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/your-username/havenly.git](https://github.com/your-username/havenly.git)
    cd havenly
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**
    Create a `.env` file in the root directory of the project and add the following variables. Replace the placeholder values with your actual credentials.

    ```env
    ATLASDB_URL=<your_mongodb_atlas_connection_string>
    SECRET=<your_session_secret_key>
    CLOUD_NAME=<your_cloudinary_cloud_name>
    CLOUD_API_KEY=<your_cloudinary_api_key>
    CLOUD_API_SECRET=<your_cloudinary_api_secret>
    MAP_TOKEN=<your_mapbox_api_token>
    ```

4.  **Start the Server**
    ```bash
    node app.js
    ```

5.  **Open Your Browser**
    Navigate to `http://localhost:8080` to see the application running.

## How to Use

-   **Sign Up** for a new account or **Log In** if you already have one.
-   From the homepage, you can **browse all available listings**.
-   Click on any listing to view its **details, location on the map, and reviews**.
-   If you are logged in, you can **add a new listing** by providing details and uploading an image.
-   On the details page of a listing you own, you will have options to **edit or delete** it.
-   You can also **leave a review and a rating** on any listing's detail page.

