# Zona Grill Ordering Form

This repository includes an web app for making orders to Zona Grill Venezuelan Food during private catering events. The application has a React client composed of a simple form that users interact with, and a Node/Express/MongoDB backend that processes orders and displays them to the administrator in an admin portal for easy filtering, addition, deletion. 

## Run locally
Create a .env file with the necessary MongoDB credentials, and have proper network approval.

### Start backend
1. `npm start`
### Start frontend
1. `cd client`

2. `npm start`

## Deploy to Heroku
The site is live on a Heroku app only when there is a corporate event happening.

Update configuration variables to include MongoDB URI credentials, admin portal username and admin portal password. Network approval must be set to 0.0.0.0, and cluster must be unpaused.
