# Use an official Nginx image as the base image
FROM nginx:latest

# Remove the default Nginx configuration file
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/

# Copy the contents of the 'dist' directory to the Nginx web root
COPY dist/movie-app/ /usr/share/nginx/html


# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]