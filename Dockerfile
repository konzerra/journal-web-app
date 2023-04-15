# Base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the app files into the container
COPY . .

# Install dependencies and build the app
RUN npm install && npm run build --prod

# Expose port 5001
EXPOSE 5001

# Start the app
CMD ["npm", "start"]



