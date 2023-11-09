// query.sql

// -- CTE1: Multiply the Total column from the Invoice table by 1.1
// WITH CTE1 AS (
//     SELECT InvoiceId, Total * 1.1 AS TransformedTotal1
//     FROM Invoice
// ),
// -- CTE2: Multiply the TransformedTotal1 from CTE1 by 0.9
// CTE2 AS (
//     SELECT InvoiceId, TransformedTotal1 * 0.9 AS TransformedTotal2
//     FROM CTE1
// ),
// -- CTE3: Multiply the TransformedTotal2 from CTE2 by 1.05
// CTE3 AS (
//     SELECT InvoiceId, TransformedTotal2 * 1.05 AS TransformedTotal
//     FROM CTE2
// )

// -- Selecting the final columns: InvoiceId and TransformedTotal
// SELECT InvoiceId, TransformedTotal
// FROM CTE3
// ORDER BY InvoiceId;
