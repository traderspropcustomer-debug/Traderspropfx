# PesaPal Integration

## Challenge and competition payments

All challenge purchases use the secure PesaPal checkout endpoint:
- `POST /v1/payments/pesapal/checkout`

The October Competition **does not charge a separate $5 entry payment**. A client must already have a **verified PesaPal deposit of at least USD 5** before the competition join action is accepted.

The client checks:
- `GET /v1/payments/pesapal/competition-eligibility?clientId=<client email>`

Expected response when eligible:
```json
{
  "eligible": true,
  "verifiedDeposit": 5.00
}
```

The backend must calculate `verifiedDeposit` from server-side, verified PesaPal transactions. Never trust a browser/localStorage flag as proof of payment.

## Required backend behavior

1. Authenticate the client/session.
2. Identify the client's verified PesaPal payments from the server-side payment ledger.
3. Sum only successfully verified deposits attributable to that client.
4. Return `eligible: true` only when the verified deposit total is at least USD 5.
5. When the client joins, record the competition registration server-side and prevent duplicate registrations.
6. Do not create a second $5 PesaPal order for competition registration.

The browser UI stores an eligibility hint for navigation only; the backend must enforce the rule again when provisioning competition access/MT5 credentials.
