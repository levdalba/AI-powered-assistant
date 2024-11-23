FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start Next.js development server
CMD ["npm", "run", "dev"]
