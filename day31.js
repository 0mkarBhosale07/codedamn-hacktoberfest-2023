//query.sql file code

// -- enter your SQL query here
// -- use the SQL editor UI in browser to browse the SQL database

SELECT 
    CustomerId, 
    InvoiceDate, 
    julianday(InvoiceDate) - julianday(LAG(InvoiceDate) OVER (PARTITION BY CustomerId ORDER BY InvoiceDate)) AS DaysSinceLastInvoice
FROM 
    Invoice
ORDER BY 
    CustomerId ASC,
    InvoiceDate ASC; -- Order by InvoiceDate in ascending order
