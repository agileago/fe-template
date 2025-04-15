FROM nginx:latest
COPY devops/default.conf /etc/nginx/conf.d/
#COPY devops/default.conf /etc/nginx/conf.d/default.conf.template
COPY dist /usr/share/nginx/html/

# 设置容器启动命令 如果需要替换
#CMD /bin/sh -c "envsubst '\$NAME_SPACE' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

CMD ["nginx","-g","daemon off;"]
