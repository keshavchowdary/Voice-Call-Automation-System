import requests
import time

# Example API URL
api_url = 'https://7c78-182-69-180-151.ngrok-free.app/tfi/movie'

# Headers (if needed)
headers = {
    'Content-Type': 'application/json'
}

# Number of times to hit the API
num_requests = 1000  # You can adjust this to your needs

for i in range(num_requests):
    try:
        # Make the GET request
        response = requests.get(api_url, headers=headers)

        # Check if the request was successful
        # if response.status_code == 200:
        #     data = response.json()  # Parse the JSON response
        print(response)
    except Exception as e:
        print(f"Request {i+1}: Exception occurred: {e}")
    
    # Optional: Wait for a second between requests to avoid overloading the API
    # time.sleep(1)
