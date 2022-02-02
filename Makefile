
start:
	docker build -t project-course-docker_v1 .
	docker run \
		-it \
		--rm \
		-v ${PWD}:/app \
		-v /app/node_modules \
		-p 3001:3000 \
		project-course-docker_v1
