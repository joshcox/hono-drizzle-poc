# Use the official Node.js image as the base image
FROM node:22

WORKDIR /app

RUN npm install -g node-gyp

RUN apt-get update && apt-get install -y \
    # python3 \
    # make \
    # g++ \
    # sqlite3 \
    # libsqlite3-dev \
    # Install gnupg2 to be able to sign git commits
    gnupg2

# Set the working directory and copy the local working directory inside
COPY . .

ARG USERNAME=nerd
ARG USER_UID=1293
ARG USER_GID=$USER_UID

# Create our user
RUN groupadd --gid $USER_GID $USERNAME
RUN useradd --uid $USER_UID --gid $USER_GID -m $USERNAME
RUN apt-get install -y sudo
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME
RUN chmod 0440 /etc/sudoers.d/$USERNAME
RUN chown -R $USERNAME:$USERNAME /app

# Set the default user. Omit if you want to keep the default as root.
USER $USERNAME

# tail -f /dev/null
CMD ["tail", "-f", "/dev/null"]
