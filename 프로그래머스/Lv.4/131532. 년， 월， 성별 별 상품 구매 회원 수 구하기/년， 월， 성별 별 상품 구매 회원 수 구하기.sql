SELECT 
    YEAR(os.sales_date) AS YEAR,
    MONTH(os.sales_date) AS MONTH,
    ui.GENDER,
    COUNT(DISTINCT ui.user_id) AS USERS
FROM 
    ONLINE_SALE os
JOIN 
    USER_INFO ui ON os.user_id = ui.user_id
WHERE 
    ui.gender IS NOT NULL
GROUP BY 
    year, month, ui.gender
ORDER BY 
    year, month, ui.gender;
