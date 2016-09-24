# Server
---
Intro text here for summary of server

## Installation
---
npm install

database setup

etc.

## API <a name="api"></a>
---
Explanation of basic REST API design for this server.

## Resources

### Quotes
**GET /quotes/{requested or priced}**
admin only, gets all current quote records. If parameter “requested” or “priced” is used will only return that type of quote

[requested response](./getQuotesRequested.json)

**GET /quotes/{userId}**
if user role is not ‘admin’, must use a ‘userId’ parameter, returns quotes at any stage for any user

**POST /quotes**
can be used by any role, creates new quote record at stage ‘requested’

**PUT /quotes/{id}** - admin only, quote ‘id' is required, used for adding prices to requested quotes

**PUT /quotes/{id}/statusTypeId={statusTypeId}** - admin only, quote 'id' is
required, statusTypeId is required to be an integer within the set {1,4}, used
for updating or creating statusTypeId of a quote

### Orders
**GET /orders/{placed or shipped}**
admin only, gets all current order records. If parameter “placed” or “shipped” is used will only return that type of order

**GET /orders/{userId}**
gets all current orders for any user

**POST /orders/{quoteId}**
used to approve of quote and create order from quote record, shipping info in body is required

**POST /orders**
new order is created at stage “placed” despite no prices

**GET /orders/approved**
admin only, gets the shipping info of all orders that have been approved and
have StatusTypeId of 3 or 4

### Shipping
**POST /shipping**
creates new shipping confirmation record.
