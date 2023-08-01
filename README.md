# PA-MAIL-SERVICE

Service for sending notification emails

## Getting Started

1. Clone repo
2. Navigate to directory and run `npm install`
3. Create new `.env` file with the following value

```
MONGO_URL=
SENDGRID_KEY=
SENDGRID_FROM_EMAIL=
```

4. Run `npm start`
5. Application should be running at http://localhost:3000

## Example

```
curl -d '{"event":"REGISTRATION_RECEIVED", "payload":{"email":"<replace with valid email>"}}' -H "Content-Type: application/json" -X POST http://localhost:3000/webhook
```

### Dependencies

1. MongoDB Database
2. SendGrid Account
