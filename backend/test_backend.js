const fs = require('fs');
const path = require('path');

async function testBackend() {
    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', 'test@example.com');
    formData.append('subject', 'Test Subject');
    formData.append('message', 'This is a test message from the verification script.');

    // Create a dummy file for attachment
    const dummyFilePath = path.join(__dirname, 'test-attachment.txt');
    fs.writeFileSync(dummyFilePath, 'This is a test attachment content.');

    const fileBlob = new Blob([fs.readFileSync(dummyFilePath)], { type: 'text/plain' });
    formData.append('attachment', fileBlob, 'test-attachment.txt');

    try {
        console.log('Sending request to http://localhost:5000/api/contact...');
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        console.log('Response status:', response.status);
        console.log('Response data:', data);

        if (response.ok) {
            console.log('SUCCESS: Backend is working correctly!');
        } else {
            console.error('FAILURE: Backend returned an error.');
        }
    } catch (error) {
        console.error('ERROR: Could not connect to backend.', error);
    } finally {
        // Cleanup
        if (fs.existsSync(dummyFilePath)) {
            fs.unlinkSync(dummyFilePath);
        }
    }
}

testBackend();
