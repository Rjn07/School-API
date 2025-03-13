# School-API

# School Management System API

This is a Node.js and Express.js-based School Management System API with MySQL integration. It includes:

## Features
- Add a school with name, address, latitude, and longitude
- List schools sorted by proximity (using the Haversine formula)

## API Endpoints

### Add a School
**POST** `/api/school/add`

**Request Body:**
```json
  {
    "name": "Golden Gate High",
    "address": "111 Bay St",
    "city": "San Francisco",
    "state": "California",
    "zip_code": "94103",
    "latitude": 37.7749,
    "longitude": -122.4194
  }


**Response:**
```json
{
  "message": "School added successfully"
}
```

### 2. List Schools
**GET** `/api/school/list?lat=28.7041&lng=77.1025`

**Response:**
```json
[
  {
    "name": "School Name",
    "address": "123 Main St",
    "distance": 2.5
  }
]
```

 How to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/Rjn07/School-API.git
```

2. Navigate into the project directory:
```bash
cd School-API
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file and configure your MySQL credentials:
```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_db
```

5. **Run the server:
```bash
node server.js
```

6. Access the API:
- Add a school: `http://localhost:3000/api/school/add`
- List schools: `http://localhost:3000/api/school/list?lat=28.7041&lng=77.1025`

 Technologies Used
 - Node.js 
- Express.js
- MySQL
- Postman for API testing

 Postman Collection
You can import the Postman collection using [this link](#) or find the JSON file in the project root.

 Author
- [Rjn07](https://github.com/Rjn07)




