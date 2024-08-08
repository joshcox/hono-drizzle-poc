# Use the official Node.js image as the base image
FROM node:22

WORKDIR /app

# Install gnupg2 to be able to sign git commits
RUN apt-get update && apt-get install gnupg2 -y

# Set the working directory and copy the local working directory inside
COPY . .

# Install the dependencies and build the project
RUN npm install && npm install -g concurrently
RUN npm run build

EXPOSE 3000

ARG USERNAME=nerd
ARG USER_UID=1293
ARG USER_GID=$USER_UID

# Create our user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    # [Optional] Add sudo support. Omit if you don't need to install software after connecting.
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME \
    && chown -R $USERNAME:$USERNAME /app

# Set the default user. Omit if you want to keep the default as root.
USER $USERNAME

# Command to run the application
CMD ["npm", "start"]
