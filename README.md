below are the postman collection of all the apis


{
	"info": {
		"_postman_id": "fd20322f-6a87-466f-a7ef-217246efc3c5",
		"name": "Captico",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "31396992"
	},
	"item": [
		{
			"name": "Register",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{ \"name\":\"arun\",\r\n \"email\":\"test@01\", \r\n \"password\":\"1234\" \r\n } ",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/auth/register",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"auth",
						"register"
					]
				}
			},
			"response": []
		},
		{
			"name": "login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n \"email\":\"test@abc.com\", \r\n \"password\":\"123456\" \r\n } ",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/auth/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"auth",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "createCourse",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n \"courseName\":\"nodejs\", \r\n \"description\":\"numerical methods\" ,\r\n \"instructor\":\"radha\"\r\n } ",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/courses/createCourse",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"courses",
						"createCourse"
					]
				}
			},
			"response": []
		},
		{
			"name": "updateCourseById",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n \"courseName\":\"NSm\", \r\n \"description\":\"numerical methods\" ,\r\n \"instructor\":\"radha\"\r\n } ",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/courses/updateCourse/67e455f0fe6b3f939cffd29f",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"courses",
						"updateCourse",
						"67e455f0fe6b3f939cffd29f"
					]
				}
			},
			"response": []
		},
		{
			"name": "getAllCourses",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2U0Y2Y4ZDljY2EzMGE4ZDM2NGZiNTEiLCJpYXQiOjE3NDMwNDkxOTcsImV4cCI6MTc0MzA1Mjc5N30.fSQB3VonB-OMRc64-bMYYC0NIhMqwjErbbD6zmMHLhY",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/api/courses/getAllCourses",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"courses",
						"getAllCourses"
					]
				}
			},
			"response": []
		},
		{
			"name": "getCourse",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/api/courses/getCourse/67e455f0fe6b3f939cffd29f",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"courses",
						"getCourse",
						"67e455f0fe6b3f939cffd29f"
					]
				}
			},
			"response": []
		},
		{
			"name": "getCourse Copy",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/api/courses/getCourse/67e455f0fe6b3f939cffd29f",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"courses",
						"getCourse",
						"67e455f0fe6b3f939cffd29f"
					]
				}
			},
			"response": []
		}
	]
}
