FROM nginx:1.17.8
EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]