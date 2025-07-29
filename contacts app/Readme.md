- There are some signatured syntax that express knows like:
    > const fn(req, res, next) => {...} // used to define middleware.
    > const fn(err, req, res, next) => {...} // used to define error middleware.
    > const fn('/', req, res) => {...} // used to define route.
    > etc. and this table is demonstate the same.

    | Signature                   | Type                   | Purpose                     |
| --------------------------- | ---------------------- | --------------------------- |
| `(req, res)`                | Route handler          | Respond to requests         |
| `(req, res, next)`          | Regular middleware     | Pre-process, logging, auth  |
| `(err, req, res, next)`     | Error middleware       | Catch and respond to errors |
| `app.use(path, middleware)` | Built-in usage         | Mount routes/middleware     |
| `async (req, res, next)`    | Async route/middleware | Handle promises             |





At first create route in main file then make router then controller then model
main - route > router > controller > model