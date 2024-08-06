# Use the official Node.js image as the base image
FROM node:22

# Install gnupg2 to be able to sign git commits
RUN apt-get update && apt-get install gnupg2 -y

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install && npm install -g concurrently

# Copy the source directory and tsconfig.json file
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]
