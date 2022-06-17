
Project Description:
Created a sample invoice application using React, Node js and hosting this website using S3 bucket static 
web hosting. Created an ‘invoiceapi’, using AWS API gateway integrated with lambda function and 
dynamo dB to retrieve data from the dynamo dB table invoivetable. Dynamically displayed data onto the 
local machine using API gateway.

Architecture:
The users are able to click on the website which is hosted on the s3 bucket using static hosting. It is built 
using react and nodejs. Whenever click on it creates an asynchronous call to the AWS API gateway (REST 
API) that would trigger the lambda function which has permissions to access the dynamo DB and fetches 
the data from the table inside the dynamo db and return the json format to the lambda and it will be 
passed to the API get method. The data from the API gateway is returned to the user.
AWS services used:
API Gateway
S3 Bucket
Lambda function
Dynamo db
Please find the video details as follows:
Order of videos:
1. reactapp introduction
2. s3 bucket static hosting
3. DynamoDB
4. lambda part 1
5. linking API gateway lambda and dynamo dB
6. final
Reactapp introduction
• Shows the code and brief description of the website hosted.
• Please find the link for GitHub repository
s3 bucket static hosting
• Creation of an s3 bucket for the invoice processing.
• Providing the permissions i.e. allow all public access and set the bucket policy in order to upload.
• Uploading the source code build onto the s3 bucket
• Enabling the static web hosting on s3.
• Edit the bucket policy to get only the bucket objects.
DynamoDB
• Creation of dynamo db.
• Create of table in dynamo db.
• Adding table data inside the invoice table.
Lambda part 1
• Create the lambda function
• Create a test for the lambda function
linking API gateway lambda and dynamo dB-1
• Create the API gateway called invoiceapi and provide the get method
• Configure the get method the lambda integration
• Provide the details of the lambda function which we have created earlier.
linking API gateway lambda and dynamo dB-2
• Verify the lambda function got saved .(worked on issues faced due to availability in different 
regions resolved that).
• Save the changes and deploy the get method into dev stage.
• Navigate to the lambda function and provide the index.js file in order to scan the dynamo dB
and return the table records.
• Save the changes and deploy the get method again into dev stage.
Final
• Navigate to the code in the react app and try to get the data dynamically from the api by writing 
the async ‘ComponentDidMount’ method.
• Faced challenges as ‘cors’ was not enabled while configuring the get method in AWS API 
gateway.
• Enable ‘cors’ , Save the changes and deploy the get method again into production stage.
• Provide the production API URL in the code save the changes and host the react app by 
providing ‘npm start’ in the terminal.
• Verify the dynamic functionality by adding a new record in the dynamo db table ‘invoicetable’
• Refresh the page and find the changes are reflected.
References:
https://medium.com/@gulikholmatova/building-a-serverless-react-app-using-aws-lambda-dynamodband-an-api-gateway-f846696f34cd
